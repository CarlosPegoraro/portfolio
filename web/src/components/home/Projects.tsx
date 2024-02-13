import Project from "./Project";
import logymetria from "../../assets/logymetria.jpg";
import buscalog from "../../assets/buscalog.jpg";
import bms from "../../assets/bms.jpg";

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col p-10 gap-10 bg-neutral-200 dark:bg-neutral-900">
            <h1 className="text-teal-500 text-4xl font-bold">Meus projetos</h1>
            <Project title="Logymetria - Experiência Profissional" img={logymetria} 
                description="Dirigi de forma estratégica o desenvolvimento do site vitrine da empresa, visando não apenas uma presença online marcante, mas também uma representação autêntica da identidade da marca. Simultaneamente, liderei a criação de um sistema interno, dedicado à organização e automação de processos internos, com o objetivo claro de otimizar as operações diárias e impulsionar a eficiência operacional. Essa abordagem integrada resultou em uma experiência profissional única, unindo a estética inovadora do site com a funcionalidade inteligente do sistema interno, refletindo assim a modernidade e excelência da nossa empresa." 
                stacks="Site - React.js / Vite / TailwindCss ; Sistema Interno - Laravel / Postgres / TailwindCss"/>
            <Project title="Buscalog - Experiência Profissional" img={buscalog} 
                description="Coordenei estrategicamente o desenvolvimento de uma plataforma veicular inovadora, com foco na gestão eficiente de frotas. Utilizei diversas tecnologias de ponta para otimizar o sistema, resultando em uma plataforma visualmente atraente, minimalista e de alto desempenho. A integração harmoniosa desses elementos proporcionou uma solução única, unindo estética e funcionalidade para atender às demandas exigentes do setor." 
                stacks="Plataforma Web - Laravel / Postgres / Bootstrap / Js ; Aplicativo - React Native / Laravel / Postgres"/>
            <Project title="BMS - Projeto Autoral" img={bms} 
                description="Conduzi pessoalmente o desenvolvimento de um projeto autoral inovador: um Sistema de Gerenciamento de Contas Bancárias e Transações Financeiras. Com ênfase em segurança e usabilidade, implementei tecnologias avançadas para criar uma plataforma intuitiva e robusta. Adicionalmente, integrei um sistema de relatórios e gráficos, proporcionando uma análise detalhada de dados para uma gestão financeira mais informada e eficaz." 
                stacks="Laravel / Postgres / Bootstrap / Js"/>
        </div>
    );
}
