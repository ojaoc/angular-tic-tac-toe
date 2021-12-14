import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

export interface Room {
  id: string;
  isFull: boolean;
}

export class GameSocket {
  private _socket: Socket;
  private _rooms: Room[] = [];
  private _joinedRoom: Room;

  constructor() {
    this._socket = io(environment.serverUrl);

    this._socket.on('connect', () => {
      this._socket.emit('room:list', (res: any) => {
        this._rooms = res;
      });
    });

    this._socket.on('room:left', () => {
      this._joinedRoom = null;
    });

    this._socket.on('room:created', (room) => {
      this._rooms.push(room);
    });

    this._socket.on('room:updated', (room) => {
      const existingRoom = this._rooms.find((t) => {
        return t.id === room.id;
      });
      if (existingRoom) {
        existingRoom.id = room.id;
        existingRoom.isFull = room.isFull;
      }
    });

    this._socket.on('room:deleted', (id) => {
      const index = this._rooms.findIndex((room) => {
        return room.id === id;
      });
      if (index !== -1) {
        this._rooms.splice(index, 1);
      }
    });
  }

  public get rooms() {
    return this._rooms;
  }

  public joinRoom(roomId?: string): Room {
    this._socket.emit('room:join', roomId, (roomObj: Room) => {
      this._joinedRoom = roomObj;
    });

    return this._joinedRoom;
  }
}
