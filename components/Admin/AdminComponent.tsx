import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRegistrationsQuery } from "../../generated/graphql";
import {
  Box,
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "grommet";

import { StatusGood } from "grommet-icons";
import styled from "styled-components";

const BodyStyle = styled(TableBody)`
  border: 1px solid;
`;

export const AdminComponent: React.FC = () => {
  const [session] = useSession();
  const { data, loading } = useRegistrationsQuery();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
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
                  <b>Confirmed</b>
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
                    <Button
                      style={{ float: "right" }}
                      type="button"
                      onClick={() => console.log(item)}
                      icon={<StatusGood />}
                    ></Button>
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
