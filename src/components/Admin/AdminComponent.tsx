import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import {
  useRegistrationsQuery,
  useRegisterConfirmationMutation,
  RegistrationsDocument,
} from "../../generated/graphql";

import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../@UI/Buttons";
import { GrStatusGood, GrLogin, GrInProgress } from "react-icons/gr";

const BodyStyle = styled.tbody`
  border: 1px solid;
`;

export const AdminComponent: React.FC = () => {
  const [session] = useSession();
  const { data, loading } = useRegistrationsQuery();
  const [
    confirmRegister,
    { data: confStatus },
  ] = useRegisterConfirmationMutation({
    refetchQueries: [
      {
        query: RegistrationsDocument,
      },
    ],
  });

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
            {data.registrationList.items.map((item, key) => (
              <BodyStyle key={`user${key}`}>
                <tr>
                  <td colSpan={5} scope="row">
                    <b>{item.email}</b>
                  </td>
                  <td>
                    <b>{item.apartmentKey}</b>
                  </td>
                  <td>
                    {item.registrationStatus === "To Be Confirmed" && (
                      <Button
                        style={{ float: "right" }}
                        type="button"
                        onClick={() =>
                          confirmRegister({ variables: { userId: item._id } })
                        }
                      >
                        <GrInProgress />
                      </Button>
                    )}
                    {item.registrationStatus === "Confirmed" && (
                      <Button
                        style={{ float: "right" }}
                        type="button"
                        // onClick={() =>
                        //   confirmRegister({ variables: { userId: item._id } })
                        // }
                      >
                        <GrStatusGood />
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
            ))}
          </table>
        </div>
      )}
    </>
  );
};
