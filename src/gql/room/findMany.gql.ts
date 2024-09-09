import { gql } from "../../__generated__";

export const roomFindManyGql = gql(`
    query GetRooms {
      room {
        findMany {
          createdAt
          id
          deletedAt
          name
          updatedAt
          description
        }
      }
    }
  `);
