import { persistentAtom } from "@nanostores/persistent";
export interface user {
  token: string;
  record: Record;
}
export interface Record {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  created: string;
  updated: string;
  name: string;
  avatar: string;
}

export const user = persistentAtom<user | null>("user", null, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const addUser = (userDetails: user) => {
  user.set(userDetails);
};

export const removeUser = () => {
  user.set(null);
};
