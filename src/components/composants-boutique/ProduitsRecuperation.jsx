import React from 'react'

const ProduitsRecuperation = () => {
  return (
    <div className="backdrop-filter backdrop-blur-sm bg-white bg-opacity-5 border border-gray-100">
      <div className="flex justify-center space-x-8">
        <select
          name=""
          id=""
          className="mt-6 rounded-md w-52 h-10 font-medium text-center"
        >
          Tier par :
          <option value="" className="font-medium">
            Prix Croissant
          </option>
          <option value="" className="font-medium">
            Prix Décroissant
          </option>
          <option value="" className="font-medium">
            De A à Z
          </option>
          <option value="" className="font-medium">
            De Z à A
          </option>
        </select>
        <input
          type="search"
          className="mt-6 rounded-md w-72 h-10 text-center text-xl"
          placeholder="rechercher"
        />
      </div>

      <div class="flex justify-center">
        <div class="w-1/6 rounded-2xl p-4 bg-gray-50 py-16 mt-12 ml-12 mb-12">
          <h1 class="text-3xl font-bold mb-4 text-center">
            Produits récupération I
          </h1>
          <p class="text-base text-center mb-8 max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            officiis inventore ad exercitationem error, atque impedit repellat
            temporibus praesentium similique cumque soluta reiciendis qui,
            ullam voluptatum in, doloribus maxime sit!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            officiis inventore ad exercitationem error, atque impedit repellat
            temporibus praesentium similique cumque soluta reiciendis qui,
            ullam voluptatum in, doloribus maxime sit!
          </p>
        </div>

        <div class="w-1/6 rounded-2xl p-4 bg-gray-50 py-16 mt-12 ml-12 mb-12">
          <h1 class="text-3xl font-bold mb-4 text-center">
            Produits récupération II
          </h1>
          <p class="text-base text-center mb-8 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            officiis inventore ad exercitationem error, atque impedit repellat
            temporibus praesentium similique cumque soluta reiciendis qui,
            ullam voluptatum in, doloribus maxime sit!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            officiis inventore ad exercitationem error, atque impedit repellat
            temporibus praesentium similique cumque soluta reiciendis qui,
            ullam voluptatum in, doloribus maxime sit!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProduitsRecuperation