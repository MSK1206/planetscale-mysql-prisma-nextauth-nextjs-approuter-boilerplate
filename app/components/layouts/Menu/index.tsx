'use client';
import LinkButton from '@/app/components/ui/LinkButton';
import Bars3BottomRightIcon from '@heroicons/react/24/outline/Bars3BottomRightIcon';
import { DefaultSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Props = {
  user: DefaultSession['user'];
};

export default function Menu({ user }: Props) {
  const router = useRouter();
  if (!user) {
    return (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <Bars3BottomRightIcon className="w-8 h-8 rounded-full text-black" />
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-[280px]"
        >
          <LinkButton href={'/'} linkLabel={'Home'} />
          <LinkButton href={'/blog'} linkLabel={'ブログ'} />
          <LinkButton href={'/publish'} linkLabel={'投稿する'} />
          <LinkButton href={'/dashboard'} linkLabel={'投稿管理'} />
          <LinkButton href={'/contact'} linkLabel={'お問合せ'} />
          <span className="my-2 p-2">
            <hr />
          </span>
          <li>
            <span className="text-xs">User: ログインされていません</span>
          </li>
          <li>
            <span className="text-xs">Mail: ログインされていません</span>
          </li>
          <button
            type="button"
            onClick={() => router.push('/login')}
            className="btn btn-neutral border border-slate-400 rounded-lg my-4 hover:text-transparent focus:text-transparent"
          >
            <p className="bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              <span className="text-xs font-bold">ログイン / 登録する</span>
            </p>
          </button>
        </ul>
      </div>
    );
  }
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <span
          className="rounded-full w-10 h-10"
          style={{
            backgroundImage: `url('${user?.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '40px 40px',
            width: 40,
            height: 40,
          }}
        />
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-[250px]"
      >
        <LinkButton href={'/'} linkLabel={'Home'} />
        <LinkButton href={'/blog'} linkLabel={'ブログ'} />
        <LinkButton href={'/publish'} linkLabel={'投稿する'} />
        <LinkButton href={'/dashboard'} linkLabel={'投稿管理'} />
        <LinkButton href={'/contact'} linkLabel={'お問合せ'} />
        <span className="my-2 p-2">
          <hr />
        </span>
        <li>
          <span className="text-xs">User: {user?.name}</span>
        </li>
        <li>
          <span className="text-xs">Mail: {user?.email}</span>
        </li>
        <button
          type="button"
          onClick={() => signOut({callbackUrl: "/"})}
          className="btn btn-neutral border border-slate-400 rounded-lg my-4 hover:text-transparent focus:text-transparent"
        >
          <p className="bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            <span className="text-xs font-bold">ログアウト</span>
          </p>
        </button>
      </ul>
    </div>
  );
}
