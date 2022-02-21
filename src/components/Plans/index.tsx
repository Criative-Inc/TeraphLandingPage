import { Plan } from "./styles";

interface PlansProps {
  price: number;
  typePlan: string;
  isPremium: boolean;
}

export function Plans({ price, typePlan, isPremium = false }: PlansProps) {
  return (
    <Plan>
     <div className="plan-box">
      <div className="header-plans">
          <u><strong>R${price}</strong>/mês</u>

          <h2>Plano {typePlan}</h2>
        </div>

        {isPremium ? (
          <ul>
            <li>Clínica com até 3 funcionários</li>
            <li>Supervisão de atendimentos</li>
            <li>Cadastro de profissionais</li>
            <li>Documentos psicológicos</li>
            <li>Acesso secretaria</li>
            <li>Agendamentos</li>
            <li>Notificações</li>
            <li>Anamneses</li>
          </ul>
        ): (
          <ul>
            <li>Documentos Psicológicos</li>
            <li>Agendamentos</li>
            <li>Notificações</li>
            <li>Evoluções</li>
            <li>Anamneses</li>
          </ul>
        )}

        <button>GARANTIR {typePlan.toUpperCase()}</button>
     </div>
    </Plan>
  );
}