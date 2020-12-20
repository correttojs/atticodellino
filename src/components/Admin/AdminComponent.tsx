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
import {
  Button,
  ButtonInverted,
  ButtonSkinned,
  ButtonWithIcon,
} from "../@UI/Buttons";
import { MdNewReleases, MdDone, MdDoneAll, MdSync } from "react-icons/md";
import { Loading } from "../@UI/Loading";
import { IoLogInSharp } from "react-icons/io5";

import Modal from "react-modal";
import { Guests } from "./Guest";

const BodyStyle = styled.tbody`
  border: 1px solid;
`;

export const AdminComponent: React.FC = () => {
  const [session] = useSession();
  const [isPast, setIsPast] = useState(false);
  const { data, loading } = useReservationsQuery({ variables: { isPast } });
  const [updateStaus] = useUpdateReservationStatusMutation({
    refetchQueries: [
      {
        query: ReservationsDocument,
        variables: { isPast },
      },
    ],
    onCompleted: () => {
      setIsOpen(null);
    },
  });
  const [sync, { data: syncedData }] = useSyncRegistrationsLazyQuery();

  const [isOpen, setIsOpen] = useState<{ userId: string; hash: string } | null>(
    null
  );

  return (
    <>
      <Modal
        isOpen={!!isOpen}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        shouldCloseOnOverlayClick={false}
      >
        <div css={tw`p-4`}>
          <p>Send SMS?</p>
          <Button
            onClick={() => {
              updateStaus({
                variables: {
                  ...isOpen,
                  reservationStatus: ReservationStatus.LinkSent,
                },
              });
            }}
            css={tw`m-4`}
          >
            Ok
          </Button>
          <ButtonInverted onClick={() => setIsOpen(null)} css={tw`m-4`}>
            Cancel
          </ButtonInverted>
        </div>
      </Modal>
      {!loading && !session && (
        <div css={tw`p-4`}>
          <ButtonWithIcon onClick={signIn} Icon={<IoLogInSharp />}>
            Sign in
          </ButtonWithIcon>
        </div>
      )}
      {loading && <Loading />}
      {session && (
        <div css={tw`p-4`}>
          <ButtonWithIcon
            css={tw`m-2`}
            onClick={() => sync()}
            Icon={<MdSync />}
          >
            Sync with Airbnb
          </ButtonWithIcon>
          <nav css={tw`flex flex-col sm:flex-row`}>
            <ButtonSkinned
              isInverter={isPast}
              css={tw`m-2`}
              onClick={() => setIsPast(false)}
            >
              Upcoming
            </ButtonSkinned>
            <ButtonSkinned
              isInverter={!isPast}
              css={tw`m-2`}
              onClick={() => setIsPast(true)}
            >
              Past
            </ButtonSkinned>
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
                        {" - "}
                        <a
                          css={tw`underline`}
                          href={item.faqUrl}
                          target="_blank"
                        >
                          faq
                        </a>
                      </td>
                      <td>
                        {item.check_in} - {item.check_out}
                      </td>
                      <td>{item.home}</td>
                      <td>{item.phone}</td>
                      <td>
                        <Button
                          title={item.reservationStatus}
                          style={{ float: "right" }}
                          type="button"
                          onClick={() => {
                            if (item.reservationStatus === "new") {
                              setIsOpen({ userId: item.id, hash: item.hash });
                            } else {
                              updateStaus({
                                variables: {
                                  userId: item.id,
                                  hash: item.hash,
                                  reservationStatus:
                                    item.reservationStatus === "link_sent"
                                      ? ReservationStatus.Registered
                                      : ReservationStatus.New,
                                },
                              });
                            }
                          }}
                        >
                          {item.reservationStatus === "link_sent" ? (
                            <MdDone color="#fff" />
                          ) : item.reservationStatus === "new" ? (
                            <MdNewReleases color="#fff" />
                          ) : (
                            <MdDoneAll color="#fff" />
                          )}
                        </Button>
                      </td>
                    </tr>

                    <Guests guests={item.guests} />
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
