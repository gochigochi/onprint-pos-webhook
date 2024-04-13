import { io } from "socket.io-client"

// undefined if server and client run on same server/url
// else can use url as https://onprintpos.diegoui.com.ar
const URL = import.meta.env.DEV ? "http://localhost:8080" : undefined 

export const socket = io(URL)