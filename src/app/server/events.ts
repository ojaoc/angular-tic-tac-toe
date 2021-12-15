import { Socket } from 'socket.io-client';

export const asyncEmit = (
  socketInstance: Socket,
  eventName: string,
  args: any[]
) =>
  new Promise((resolve, reject) => {
    socketInstance.emit(eventName, ...args);
    socketInstance.on(eventName, (result) => {
      socketInstance.off(eventName);
      resolve(result);
    });
    setTimeout(reject, 1000);
  });
