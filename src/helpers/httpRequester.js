import axios from "axios";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const requester = axios.create({
  baseURL: "http://localhost:4444",
  defaultHeaders
});

export default requester;

