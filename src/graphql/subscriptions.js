// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    name
    description
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    name
    description
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    name
    description
  }
}
`;
export const onCreateChatRoom = `subscription OnCreateChatRoom {
  onCreateChatRoom {
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
  }
}
`;
export const onUpdateChatRoom = `subscription OnUpdateChatRoom {
  onUpdateChatRoom {
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
  }
}
`;
export const onDeleteChatRoom = `subscription OnDeleteChatRoom {
  onDeleteChatRoom {
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
  }
}
`;
export const onCreateMessage = `subscription OnCreateMessage {
  onCreateMessage {
    content
    chatRoomId
    createdAt
    id
    isSent
    sender
  }
}
`;
export const onUpdateMessage = `subscription OnUpdateMessage {
  onUpdateMessage {
    content
    chatRoomId
    createdAt
    id
    isSent
    sender
  }
}
`;
export const onDeleteMessage = `subscription OnDeleteMessage {
  onDeleteMessage {
    content
    chatRoomId
    createdAt
    id
    isSent
    sender
  }
}
`;
export const onCreateMessageConnection = `subscription OnCreateMessageConnection {
  onCreateMessageConnection {
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
export const onUpdateMessageConnection = `subscription OnUpdateMessageConnection {
  onUpdateMessageConnection {
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
export const onDeleteMessageConnection = `subscription OnDeleteMessageConnection {
  onDeleteMessageConnection {
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
