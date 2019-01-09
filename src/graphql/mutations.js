// eslint-disable
// this is an auto generated file. This will be overwritten

export const createChatRoom = `mutation CreateChatRoom($input: CreateChatRoomInput!) {
  createChatRoom(input: $input) {
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
export const updateChatRoom = `mutation UpdateChatRoom($input: UpdateChatRoomInput!) {
  updateChatRoom(input: $input) {
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
export const deleteChatRoom = `mutation DeleteChatRoom($input: DeleteChatRoomInput!) {
  deleteChatRoom(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
