"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { AvatarDemo } from "@/components/quiz-logo";

export default function Reward() {
  const stickers = [
    "https://bafybeigdp7mllrdwpoi6g6dyvkzwdc6joepu5voxsx7ljhwkcgmjp47jwa.ipfs.dweb.link/uni1.png",
    "https://bafybeidcq7gxdbwpntd52bqe7xvl3zxkv4awjoyujdof6p57jqup7mr5bm.ipfs.dweb.link/uni12.png",
    "https://bafybeifkrxm2xtkoqho4a6w4exhl3vmc76lsn4to3ln3nmzyf5y4tdcagq.ipfs.dweb.link/unicorn15.png",
    "https://bafybeig7vthtkbgyjznwmnhmmdgijeqy6m3viyibwbtyiumfzdluip63l4.ipfs.dweb.link/unicorn10.png",
    "https://bafybeidmmgp3znlgc25jdiwacvrhamhnozcjx4nqhjf3abnthnf2gznc2i.ipfs.dweb.link/cute_unicorn.png",
    "https://bafybeibiiikeo63rrne2rbo22kazvzlz7ijcua3ofsdlzm5wkmrpsjb5cy.ipfs.dweb.link/Cute_rabbit.png",
    "https://ipfs.moralis.io:2053/ipfs/Qmcjni2ddCgVmQLYrXHwzFakxF6KgmQ5ztPyUkk9ax91D5/./img1.png",
    "https://ipfs.moralis.io:2053/ipfs/QmX6AMv8TCeAWfwgaQK7WJRPgbLP93E4LdPw4XRhHZTd6K/./img2.png",
    "https://ipfs.moralis.io:2053/ipfs/QmNbANQUPbX6MLUUQfsYqHdZGi2RBHniLBo7PD9D2rG8Af/./img3.png",
    "https://ipfs.moralis.io:2053/ipfs/QmVYvutKt2RmVtEvbmQYsXafFPhJY5TmepSvp5CEzWcHhP/./img4.png",
    "https://ipfs.moralis.io:2053/ipfs/Qmak3UsnQPm2TE8xsXhGw7bsxDqoPbLdy4cXCGoRXDj3ij/./img5.png",
    "https://ipfs.moralis.io:2053/ipfs/QmPSzXHgzBUSWShd3YNm8EXKjewcwQC3Q7r8G3tQ6c8JMm/./img6.png",
    "https://ipfs.moralis.io:2053/ipfs/QmdAx3Bs6YrD8qr9tVYkHjxD6nWtbjxEAhWTHZ1jt1HgEs/./img7.png",
    "https://ipfs.moralis.io:2053/ipfs/QmfRabX7Wu2yikS8n75jSJJznpev2EL6tEdyWYmZAFN7DF/./img8.png",
    "https://ipfs.moralis.io:2053/ipfs/QmPZTQAn3WLG99z9BSipS3g36dUqpiizPe47cZakLgATSf/./img9.png",
    "https://ipfs.moralis.io:2053/ipfs/QmdnnpbXS3odS6S53D5fYLHuCgK1VJRGiTfszsye5c9yYb/./img10.png",
    "https://ipfs.moralis.io:2053/ipfs/QmUD7E7BnzzmD7pcLcLbpKg5DwsEBKYffTFx6NnZz6PX9S/./img11.png",
    "https://ipfs.moralis.io:2053/ipfs/QmSuVYAgeo25tLTKjimn6k8bYMuAXAjiWLZzzgidY66KUM/./img12.png",
    "https://ipfs.moralis.io:2053/ipfs/QmNbnYPYkyKsXVFoDu92jRE5sYZwf2Hgu29MvaGhH3xiFy/./img13.png",
    "https://ipfs.moralis.io:2053/ipfs/QmNhtkXf5QjcXyHRZ4jCitj557twfLGrxp5p2m9BTH4tY8/./img14.png",
    "https://ipfs.moralis.io:2053/ipfs/QmRzW4ddaDK937VK3CGsaFwNvVQAaP1mkrGUSxmg8KM5rk/./img15.png",
    "https://ipfs.moralis.io:2053/ipfs/QmRzqNi7fjYHiUH2r3bDqfgPxLTdQVeJvfbwoUb5bzz422/./img16.png"



    
    // ... add URLs to other stickers here
  ];

  const [selectedSticker, setSelectedSticker] = useState("");
  const [showStickerCard, setShowStickerCard] = useState(false);

  const getRandomSticker = () => {
    const randomIndex = Math.floor(Math.random() * stickers.length);
    setSelectedSticker(stickers[randomIndex]);
    setShowStickerCard(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-6">
       <AvatarDemo />
      <Card className="w-1/2 h-1/2 p-6 flex justify-center items-center border-solid border-2 border-grey-800 shadow-2xl  shadow-blue-500/40 resize-y rounded-md">
        <CardContent>
          <Button
            onClick={getRandomSticker}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 shadow-2xl  shadow-blue-500/40"
          >
            Get Your Sticker
          </Button>
          <Link href="/">
            <Button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 shadow-2xl  shadow-blue-500/40">
              Go to Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
      {showStickerCard && (
        <Card className="w-1/3 p-6 flex flex-col justify-center items-center border-solid border-2 border-grey-800 shadow-2xl  shadow-blue-500/40 resize-y rounded-md">
          <CardContent>
            {selectedSticker && (
              <>
                <img
                  src={selectedSticker}
                  alt="Your Sticker"
                  className="resize-y rounded-md"
                />
                <a href={selectedSticker} download>
                  <Button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 shadow-2xl  shadow-blue-500/40">
                    Download Sticker
                  </Button>
                </a>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
