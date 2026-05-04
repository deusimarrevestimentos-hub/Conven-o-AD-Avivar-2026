export default function ConvencaoAvivar() {
  const programacao = [
    { dia: "03 Maio", horario: "19:00", evento: "Abertura Oficial e Santa Ceia" },
    { dia: "04 Maio", horario: "09:00", evento: "Escola de Líderes e Obreiros" },
    { dia: "04 Maio", horario: "19:00", evento: "Grande Culto de Avivamento" },
    { dia: "05 Maio", horario: "19:00", evento: "Encerramento da Convenção" },
  ];

  const pregadores = [
    { nome: "Pr. Convidado", foto: "/pregador1.jpg" },
    { nome: "Pr. Presidente", foto: "/pregador2.jpg" },
    { nome: "Ministério Aviva Music", foto: "/avivamusic.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Banner Principal */}
      <section
        className="h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="bg-black/60 w-full h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <img src="/logo.png" alt="Logo AD Avivar" className="w-28 mb-6" />

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Convenção AD Avivar 2026
            </h1>

            <p className="text-xl mb-6">
              Um tempo de comunhão, palavra e avivamento.
            </p>

            <button className="bg-white text-black px-6 py-3 rounded-2xl font-bold">
              Fazer Inscrição
            </button>
          </div>
        </div>
      </section>

      {/* Tema */}
      <section className="py-12 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Tema da Convenção</h2>
        <p className="text-xl italic">
          "E vos vivificou, estando vós mortos em ofensas e pecados."
        </p>
      </section>

      {/* Formulário */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">Inscrição</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input className="border p-3 rounded-xl" placeholder="Nome completo" />
          <input className="border p-3 rounded-xl" placeholder="Telefone" />
          <input className="border p-3 rounded-xl" placeholder="Cidade" />
          <input className="border p-3 rounded-xl" placeholder="Congregação" />
          <input className="border p-3 rounded-xl" placeholder="Cargo" />
          <input type="file" className="border p-3 rounded-xl" />
        </div>

        {/* Pix */}
        <div className="mt-8 bg-white shadow rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-2">Pagamento via Pix</h3>
          <img src="/pix-qrcode.png" alt="QR Code Pix" className="w-48 mb-4" />
          <p>Envie o comprovante no formulário acima.</p>
        </div>

        <button className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-2xl">
          Confirmar Inscrição
        </button>
      </section>

      {/* Programação */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Programação</h2>

          <div className="space-y-4">
            {programacao.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-4 flex justify-between"
              >
                <span>{item.dia}</span>
                <span>{item.horario}</span>
                <span>{item.evento}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pregadores */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Preletores e Louvor</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {pregadores.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow p-4 text-center"
              >
                <img
                  src={item.foto}
                  alt={item.nome}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="font-bold">{item.nome}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Local</h2>
        <p>AD Avivar Sede - Rua Morro Agudo, Maysa 2, Trindade - GO</p>
      </section>

      {/* Rodapé */}
      <footer className="bg-black text-white p-8 text-center">
        <p>AD Avivar • Ministério Aviva Music • Convenção 2026</p>
      </footer>
    </div>
  );
}