// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const updateTodo = `mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const deleteTodo = `mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    id
    name
    description
  }
}
`;
export const createChatRoom = `mutation CreateChatRoom($input: CreateChatRoomInput!) {
  createChatRoom(input: $input) {
    createdAt
    id
    name
    longitude
    latitude
  }
}
`;
export const updateChatRoom = `mutation UpdateChatRoom($input: UpdateChatRoomInput!) {
  updateChatRoom(input: $input) {
    createdAt
    id
    name
    longitude
    latitude
  }
}
`;
export const deleteChatRoom = `mutation DeleteChatRoom($input: DeleteChatRoomInput!) {
  deleteChatRoom(input: $input) {
    createdAt
    id
    name
    longitude
    latitude
  }
}
`;
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    content
    chatRoomId
    createdAt
    id
    isSent
    sender
  }
}
`;
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
    content
    chatRoomId
    createdAt
    id
    isSent
    sender
  }
}
`;
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
    content
    chatRoomId
    createdAt
    id
    isSent
    sender
  }
}
`;
