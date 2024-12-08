import { HeroSearchInputs } from "./hero-search-inputs";

export function HeroContainer() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1538334421852-687c439c92f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-5 text-5xl font-bold max-w-md">
            Encontre o próximo lugar que vai te encantar
          </h1>
          <p className="mb-5 max-w-md">
            Descubra restaurantes e cafés com ambientes perfeitos perto de você
            com apenas alguns cliques.{" "}
          </p>
          <HeroSearchInputs />
        </div>
      </div>
    </div>
  );
}
