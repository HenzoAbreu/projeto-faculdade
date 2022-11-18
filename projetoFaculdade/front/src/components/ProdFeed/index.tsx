import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  name: string;
  price: Number;
  description: string;
  photosUrl: string;
}

export function Post() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Lista de produtos
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.kabum.com.br/produtos/fotos/101513/headset-gamer-fallen-morcego-surround-virtual-7-1-drivers-53mm-he-ga-fn-mo_1633372716_gg.jpg"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Headset Gamer Fallen Morcego $399.99
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Headset Gamer Fallen Morcego, Surround Virtual 7.1
              </span>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.kabum.com.br/produtos/fotos/93160/93160_1523969683_index_gg.jpg"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Televisao 4k $999.99
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Smart TV 50" 4K UHD Samsung
              </span>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.kabum.com.br/produtos/fotos/129451/processador-amd-ryzen-9-5950x-cache-72mb-3-4ghz-4-9ghz-max-turbo-am4-100-100000065box_1602603581_gg.jpg"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Processador AMD Ryzen 5 5600X $1199.99
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Processador AMD Ryzen 5 5600X, 3.7GHz , 6 Núcleos, 12 Threads
              </span>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.kabum.com.br/produtos/fotos/307704/monitor-gamer-acer-nitro-qg241y-p-23-8-led-full-hd-165hz-1ms-hdmi-displayport-freesync-premium-preto-um-qq1aa-s03_1643815428_gg.jpg"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Monitor gamer acer nitro $1999.99
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Monitor gamer acer 144hz full hd
              </span>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="data:image/jpeg;base64,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"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                skate dos minions $199.99
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Um skate grande dos minions
              </span>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.kabum.com.br/produtos/fotos/102649/mouse-gamer-logitech-g403-hero-16k-rgb-lightsync-16000-dpi_mouse-gamer-logitech-g403-hero-16k-rgb-lightsync-16000-dpi_1563479684_gg.jpg"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                mouse logitech g403 $199.99
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Mouse gamer da logitech, 25000 dpi sensor hero
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
