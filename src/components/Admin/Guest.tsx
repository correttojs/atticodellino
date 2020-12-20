import { ReservationsQuery } from "../../generated/graphql";
import React, { useState } from "react";
import tw from "twin.macro";

export const Guests: React.FC<{
  guests: ReservationsQuery["reservations"][0]["guests"];
}> = ({ guests }) => {
  return (
    <>
      {guests.map((guest, k) => {
        return (
          <tr key={`guest${k}`}>
            <td scope="row">
              {guest.lastName} {guest.firstName}
            </td>
            <td>
              {guest.docFile ? (
                <a css={tw`underline`} href={guest.docFile} target="_blank">
                  {guest.documentType}
                </a>
              ) : (
                guest.documentType
              )}
              : {guest.documentNumber} ({guest.documentPlace})
            </td>
            <td>{guest.nationality}</td>
            <td colSpan={3}>
              {guest.placeOfBirth} - {guest.birthDate}
            </td>
          </tr>
        );
      })}
    </>
  );
};
