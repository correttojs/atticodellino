import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import {
  useRegistrationsQuery,
  useRegisterConfirmationMutation,
  RegistrationsDocument,
} from "../../generated/graphql";
import {
  Box,
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "grommet";

import { StatusGood, Login, InProgress } from "grommet-icons";
import styled from "styled-components";

const BodyStyle = styled(TableBody)`
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
        <Box pad="large">
          <Button icon={<Login />} label="Sign in" onClick={signIn}></Button>
        </Box>
      )}
      {loading && <p>Loading...</p>}
      {session && data && (
        <Box pad="medium">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell scope="col" border="bottom">
                  <b>Name</b>
                </TableCell>
                <TableCell scope="col" border="bottom">
                  <b>Document</b>
                </TableCell>
                <TableCell scope="col" border="bottom">
                  <b>Nationality</b>
                </TableCell>
                <TableCell scope="col" border="bottom">
                  <b>Birth Date</b>
                </TableCell>
                <TableCell scope="col" border="bottom">
                  <b>Place of Birth</b>
                </TableCell>
                <TableCell scope="col" border="bottom">
                  <b>Apartment</b>
                </TableCell>
                <TableCell scope="col" border="bottom">
                  <b>Status</b>
                </TableCell>
              </TableRow>
            </TableHeader>
            {data.registrationList.items.map((item, key) => (
              <BodyStyle key={`user${key}`}>
                <TableRow>
                  <TableCell colSpan={5} scope="row">
                    <b>{item.email}</b>
                  </TableCell>
                  <TableCell>
                    <b>{item.apartmentKey}</b>
                  </TableCell>
                  <TableCell>
                    {item.registrationStatus === "To Be Confirmed" && (
                      <Button
                        style={{ float: "right" }}
                        type="button"
                        onClick={() =>
                          confirmRegister({ variables: { userId: item._id } })
                        }
                        icon={<InProgress />}
                      ></Button>
                    )}
                    {item.registrationStatus === "Confirmed" && (
                      <Button
                        style={{ float: "right" }}
                        type="button"
                        // onClick={() =>
                        //   confirmRegister({ variables: { userId: item._id } })
                        // }
                        icon={<StatusGood />}
                      ></Button>
                    )}
                  </TableCell>
                </TableRow>
                {item.guests.map((guest, k) => {
                  return (
                    <TableRow key={`guest${k}`}>
                      <TableCell scope="row">
                        {guest.lastName} {guest.firstName}
                      </TableCell>
                      <TableCell>
                        {guest.documentType} {guest.documentNumber}
                      </TableCell>
                      <TableCell>{guest.nationality}</TableCell>
                      <TableCell>{guest.birthDate}</TableCell>
                      <TableCell colSpan={3}>{guest.placeOfBirth}</TableCell>
                    </TableRow>
                  );
                })}
              </BodyStyle>
            ))}
          </Table>
        </Box>
      )}
    </>
  );
};
