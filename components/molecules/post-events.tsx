import React, { useCallback, useRef, useState } from 'react';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';
import axios from 'axios';

export const PostEvents: React.FC = ({ handleSubmit }) => {
  const zipcodeRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const address = await handleSubmit(zipcodeRef.current.value);
        addressRef.current.value = address;
      }}
    >
      <Input placeholder="郵便番号" ref={zipcodeRef} className="mr-2 mb-2" />
      <Button>GET</Button>
      <br />
      <Input ref={addressRef} readOnly="readonly" />
    </form>
  );
};
