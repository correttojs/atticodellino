import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import {
  useReservationsQuery,
  ReservationsDocument,
  useSyncRegistrationsLazyQuery,
  useUpdateReservationStatusMutation,
  ReservationStatus,
} from "../../generated/graphql";

import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../@UI/Buttons";
import { GrLogin } from "react-icons/gr";
import { MdNewReleases, MdDone, MdDoneAll, MdSync } from "react-icons/md";

const BodyStyle = styled.tbody`
  border: 1px solid;
`;

export const AdminComponent: React.FC = () => {
  const [session] = useSession();
  const { data, loading } = useReservationsQuery();
  const [
    updateStaus,
    { data: confStatus },
  ] = useUpdateReservationStatusMutation({
    refetchQueries: [
      {
        query: ReservationsDocument,
      },
    ],
  });

  const [sync, { data: syncedData }] = useSyncRegistrationsLazyQuery();

  return (
    <>
      {!loading && !session && (
        <div css={tw`p-4`}>
          <Button onClick={signIn}>
            <div css={tw`flex`}>
              <GrLogin color="#fff" /> Sign in
            </div>
          </Button>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {session && data && (
        <div css={tw`p-4`}>
          <Button onClick={() => sync()}>
            <div css={tw`flex cursor-pointer`}>
              <MdSync color="#fff" /> Sync with Airbnb
            </div>
          </Button>
          <table>
            <thead>
              <tr>
                <td scope="col" css={tw`border-b-2`}>
                  <b>Name</b>
                </td>
                <td scope="col" css={tw`border-b-2`}>
                  <b>Document</b>
                </td>
                <td scope="col" css={tw`border-b-2`}>
                  <b>Nationality</b>
                </td>
                <td scope="col" css={tw`border-b-2`}>
                  <b>Birth Date</b>
                </td>
                <td scope="col" css={tw`border-b-2`}>
                  <b>Place of Birth</b>
                </td>
                <td scope="col" css={tw`border-b-2`}>
                  <b>Apartment</b>
                </td>
                <td scope="col" css={tw`border-b-2`}>
                  <b>Status</b>
                </td>
              </tr>
            </thead>
            {(syncedData?.syncReservations ?? data.reservations).map(
              (item, key) => (
                <BodyStyle key={`user${key}`}>
                  <tr>
                    <td colSpan={5} scope="row">
                      <b>{item.guest_name}</b>
                    </td>
                    <td>
                      <b>{item.home}</b>
                    </td>
                    <td>
                      <b>{item.phone}</b>
                    </td>
                    <td>
                      {item.reservationStatus === "new" && (
                        <Button
                          style={{ float: "right" }}
                          type="button"
                          onClick={() =>
                            updateStaus({
                              variables: {
                                userId: item.id,
                                hash: item.hash,
                                reservationStatus: ReservationStatus.LinkSent,
                              },
                            })
                          }
                        >
                          <MdNewReleases color="#fff" />
                        </Button>
                      )}
                      {item.reservationStatus === "link_sent" && (
                        <Button
                          style={{ float: "right" }}
                          type="button"
                          onClick={() =>
                            updateStaus({
                              variables: {
                                userId: item.id,
                                hash: item.hash,
                                reservationStatus: ReservationStatus.Registered,
                              },
                            })
                          }
                        >
                          <MdDone color="#fff" />
                        </Button>
                      )}
                      {item.reservationStatus === "registered" && (
                        <Button
                          style={{ float: "right" }}
                          type="button"
                          onClick={() =>
                            updateStaus({
                              variables: {
                                userId: item.id,
                                hash: item.hash,
                                reservationStatus: ReservationStatus.New,
                              },
                            })
                          }
                        >
                          <MdDoneAll color="#fff" />
                        </Button>
                      )}
                    </td>
                  </tr>
                  {item.guests.map((guest, k) => {
                    return (
                      <tr key={`guest${k}`}>
                        <td scope="row">
                          {guest.lastName} {guest.firstName}
                        </td>
                        <td>
                          {guest.documentType} {guest.documentNumber}
                        </td>
                        <td>{guest.nationality}</td>
                        <td>{guest.birthDate}</td>
                        <td colSpan={3}>{guest.placeOfBirth}</td>
                      </tr>
                    );
                  })}
                </BodyStyle>
              )
            )}
          </table>
        </div>
      )}
    </>
  );
};
