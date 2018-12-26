// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
export const getChatRoom = `query GetChatRoom($id: ID!) {
  getChatRoom(id: $id) {
    createdAt
    id
    messages {
      messages {
        content
        chatRoomId
        createdAt
        id
        isSent
        sender
      }
      nextToken
    }
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
      messages {
        nextToken
      }
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
export const getMessageConnection = `query GetMessageConnection($id: ID!) {
  getMessageConnection(id: $id) {
    messages {
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
export const listMessageConnections = `query ListMessageConnections(
  $filter: ModelMessageConnectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessageConnections(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      messages {
        content
        chatRoomId
        createdAt
        id
        isSent
        sender
      }
      nextToken
    }
    nextToken
  }
}
`;
