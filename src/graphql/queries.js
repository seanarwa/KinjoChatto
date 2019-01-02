// eslint-disable
// this is an auto generated file. This will be overwritten

export const getChatRoom = `query GetChatRoom($id: ID!) {
  getChatRoom(id: $id) {
    createdAt
    id
    name
    longitude
    latitude
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
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    content
    chatRoomId
    createdAt
    id
    isSent
    sender
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
      chatRoomId
      createdAt
      id
      isSent
      sender
    }
    nextToken
  }
}
`;
