import { SendReqCreateUser } from "@/controllers/user";
import axios from "axios";
import React, { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  
  return (
    <div className="w-full h-screen flex flex-col gap-6 p-24 justify-center items-center">
      <h3 className="text-4xl capitalize font-bold">
        simulasi crud database v1
      </h3>
      <label className="input input-bordered flex items-center gap-2 w-96">
        Name :
        <input
          type="text"
          className="grow"
          placeholder="user"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-96">
        password :
        <input
          type="password"
          className="grow"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <button className="btn w-96" onClick={() => SendReqCreateUser("/api/user", {nama: name, password: pass})}>
        send
      </button>
    </div>
  );
};

export default Index;
