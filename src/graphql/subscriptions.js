// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateChatRoom = `subscription OnCreateChatRoom {
  onCreateChatRoom {
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
export const onUpdateChatRoom = `subscription OnUpdateChatRoom {
  onUpdateChatRoom {
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
export const onDeleteChatRoom = `subscription OnDeleteChatRoom {
  onDeleteChatRoom {
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
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
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
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
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
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
