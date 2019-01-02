// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateChatRoom = `subscription OnCreateChatRoom {
  onCreateChatRoom {
    createdAt
    id
    name
    longitude
    latitude
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
