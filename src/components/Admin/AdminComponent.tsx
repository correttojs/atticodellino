import React, { useState } from "react";
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
import { Button, ButtonInverted } from "../@UI/Buttons";
import { GrLogin } from "react-icons/gr";
import { MdNewReleases, MdDone, MdDoneAll, MdSync } from "react-icons/md";

const BodyStyle = styled.tbody`
  border: 1px solid;
`;

export const AdminComponent: React.FC = () => {
  const [session] = useSession();
  const [isPast, setIsPast] = useState(false);
  const { data, loading } = useReservationsQuery({ variables: { isPast } });
  const [
    updateStaus,
    { data: confStatus },
  ] = useUpdateReservationStatusMutation({
    refetchQueries: [
      {
        query: ReservationsDocument,
        variables: { isPast },
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
      {session && (
        <div css={tw`p-4`}>
          <Button onClick={() => sync()}>
            <div css={tw`flex cursor-pointer`}>
              <MdSync color="#fff" /> Sync with Airbnb
            </div>
          </Button>
          <nav css={tw`flex flex-col sm:flex-row`}>
            {isPast ? (
              <ButtonInverted css={tw`m-2`} onClick={() => setIsPast(false)}>
                Upcoming
              </ButtonInverted>
            ) : (
              <Button css={tw`m-2`} onClick={() => setIsPast(false)}>
                Upcoming
              </Button>
            )}
            {isPast ? (
              <Button css={tw`m-2`} onClick={() => setIsPast(true)}>
                Past
              </Button>
            ) : (
              <ButtonInverted css={tw`m-2`} onClick={() => setIsPast(true)}>
                Past
              </ButtonInverted>
            )}
          </nav>

          {data && (
            <table>
              {(syncedData?.syncReservations ?? data.reservations).map(
                (item, key) => (
                  <BodyStyle key={`user${key}`}>
                    <tr>
                      <td scope="row">
                        <b>{item.guest_name}</b>
                      </td>
                      <td scope="row">
                        <a
                          css={tw`underline`}
                          href={item.registrationUrl}
                          target="_blank"
                        >
                          register
                        </a>
                      </td>
                      <td>
                        {item.check_in} - {item.check_out}
                      </td>
                      <td>{item.home}</td>
                      <td>{item.phone}</td>
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
                                  reservationStatus:
                                    ReservationStatus.Registered,
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
                            {guest.documentType}: {guest.documentNumber}
                          </td>
                          <td>{guest.nationality}</td>
                          <td colSpan={3}>
                            {guest.placeOfBirth} - {guest.birthDate}
                          </td>
                        </tr>
                      );
                    })}
                  </BodyStyle>
                )
              )}
            </table>
          )}
        </div>
      )}
    </>
  );
};
