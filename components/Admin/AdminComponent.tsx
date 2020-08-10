import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRegistrationsQuery } from "../../generated/graphql";

export const AdminComponent: React.FC = () => {
  const [session] = useSession();
  const { data, loading } = useRegistrationsQuery();

  return (
    <>
      AAA
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {loading && <p>Loading...</p>}
      {session &&
        data &&
        data.registrationList.items.map((item) => (
          <div>
            <div>
              {item.email} {item.apartmentKey}
            </div>
            {item.guests.map((guest, k) => {
              return (
                <div key={`guest${k}`}>
                  <span>{guest.firstName}</span>
                  <span>{guest.lastName}</span>
                  <span>{guest.documentType}</span>
                  <span>{guest.documentNumber}</span>
                  <span>{guest.nationality}</span>
                  <span>{guest.placeOfBirth}</span>
                  <span>{guest.birthDate}</span>
                </div>
              );
            })}
          </div>
        ))}
    </>
  );
};
