'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { UserFavorites } from '../../domain/models/user';

type UserBoxProps = {
  userInfo: UserFavorites;
};

export function UserBox({ userInfo }: UserBoxProps) {
  const router = useRouter();
  function handleClickUsersBox(id: string) {
    router.push(`/user/${id}`);
  }

  return (
    <div
      className="card w-96 bg-zinc-900 text-zinc-50 shadow-shape hover:opacity-50 hover:cursor-pointer"
      onClick={() => handleClickUsersBox(userInfo.id)}
    >
      <figure className="h-52">
        <Image
          src={userInfo.image_url}
          alt={userInfo.name}
          width={500}
          height={200}
          style={{ objectFit: 'contain' }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between h-16">
          {userInfo.name}
        </h2>
      </div>
    </div>
  );
}
