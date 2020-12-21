import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import {
  useReservationsQuery,
  ReservationsDocument,
  useSyncRegistrationsLazyQuery,
  useUpdateReservationStatusMutation,
  ReservationStatus,
  ReservationsQuery,
} from "../../generated/graphql";

import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";
import {
  Button,
  ButtonInverted,
  ButtonSkinned,
  ButtonSmall,
  ButtonWithIcon,
} from "../@UI/Buttons";
import {
  MdNewReleases,
  MdDone,
  MdDoneAll,
  MdSync,
  MdDetails,
} from "react-icons/md";
import { Loading } from "../@UI/Loading";
import { IoLogInSharp } from "react-icons/io5";

import Modal from "react-modal";
import { MQ_MOBILE } from "../Layout/MediaQueries";
import { Reservation } from "./Reservation";

const BodyStyle = styled.tbody`
  border: 1px solid;
`;

export const GlobalStyle = createGlobalStyle`
    
    @media ${MQ_MOBILE} {
      .ReactModal__Content{
        top:50% !important;
        left: 50% !important;
        right: auto !important;
        bottom: auto !important;
      }
    }

  
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
      setIsSmsOpen(null);
    },
  });
  const [
    sync,
    { data: syncedData, error: syncError, loading: syncLoading },
  ] = useSyncRegistrationsLazyQuery();

  const [isSmsOpen, setIsSmsOpen] = useState<{
    userId: string;
    hash: string;
  } | null>(null);

  const [reservationDetails, setReservationDetails] = useState<
    ReservationsQuery["reservations"][0] | null
  >(null);

  return (
    <>
      <GlobalStyle />
      {syncError && <div>An Error occurred</div>}
      <Reservation
        reservation={reservationDetails}
        onClose={() => setReservationDetails(null)}
      />
      <Modal
        isOpen={!!isSmsOpen}
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
                  ...isSmsOpen,
                  reservationStatus: ReservationStatus.LinkSent,
                },
              });
            }}
            css={tw`m-4`}
          >
            Ok
          </Button>
          <ButtonInverted onClick={() => setIsSmsOpen(null)} css={tw`m-4`}>
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
          {syncLoading ? (
            <Loading />
          ) : (
            <ButtonWithIcon
              css={tw`m-2`}
              onClick={() => sync()}
              Icon={<MdSync />}
            >
              Sync with Airbnb
            </ButtonWithIcon>
          )}

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
                        <b
                          css={tw`underline`}
                          onClick={() => setReservationDetails(item)}
                        >
                          {item.guest_name}
                        </b>
                      </td>

                      <td>{item.check_in}</td>
                      <td>{item.home}</td>
                      <td>
                        <ButtonSmall
                          title={item.reservationStatus}
                          style={{ float: "right" }}
                          type="button"
                          onClick={() => {
                            if (item.reservationStatus === "new") {
                              setIsSmsOpen({
                                userId: item.id,
                                hash: item.hash,
                              });
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
                        </ButtonSmall>
                      </td>
                    </tr>
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
