// eslint-disable
// this is an auto generated file. This will be overwritten

export const getChatRoom = `query GetChatRoom($id: ID!) {
  getChatRoom(id: $id) {
    createdAt
    id
    name
    longitude
    latitude
    messages {
      items {
        content
        createdAt
        id
      }
      nextToken
    }
  }
}
`;
export const listChatRooms = `query ListChatRooms(
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      longitude
      latitude
      messages {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    content
    createdAt
    id
    chatRoom {
      createdAt
      id
      name
      longitude
      latitude
      messages {
        nextToken
      }
    }
    sender {
      id
      username
      email
      emailVerified
      phoneNumber
      phoneNumberVerified
      messages {
        nextToken
      }
    }
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      chatRoom {
        createdAt
        id
        name
        longitude
        latitude
      }
      sender {
        id
        username
        email
        emailVerified
        phoneNumber
        phoneNumberVerified
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    emailVerified
    phoneNumber
    phoneNumberVerified
    messages {
      items {
        content
        createdAt
        id
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      emailVerified
      phoneNumber
      phoneNumberVerified
      messages {
        nextToken
      }
    }
    nextToken
  }
}
`;
