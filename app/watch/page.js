"use client";
import React from 'react';
import MuxPlayer from '@mux/mux-player-react';
import Link from 'next/link';

function BackArrow() {
  return (
    <Link href="/home">
      <button className="absolute top-4 left-4 z-10 text-white text-xl cursor-pointer">
        &#8592;
      </button>
    </Link>
  );
}

function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="w-screen h-screen overflow-hidden">
        <MuxPlayer
          playbackId="DS00Spx1CV902MCtPj5WknGlR102V5HFkDe"
          metadata={{
            video_id: 'video-id-123456',
            video_title: 'Big Buck Bunny',
            viewer_user_id: 'user-id-bc-789',
          }}
          streamType="on-demand"
          className="absolute inset-0 min-w-screen min-h-screen object-cover overflow-hidden"
        />
      </div>
      <BackArrow />
    </div>
  );
}

export default Page;
