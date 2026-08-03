import goepiImage from "@/assets/projects/goepi.png";
import phronesisImage from "@/assets/projects/phronesis.png";
import buscalogImage from "@/assets/projects/buscalog.png";
import cursoDevImage from "@/assets/projects/cursodev.png";
import redeDorImage from "@/assets/projects/rededor.png";

export interface Project {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    stacks: string[];
    accent: "cyan" | "violet";
    image: string;
    link: string;
    owner: string;
};

const projects: Project[] = [
    {
        number: "01",
        title: "GoEPI",
        subtitle: "Gestão inteligente de EPIs",
        description: "Plataforma para centralizar e automatizar a gestão de EPIs, controlando colaboradores, estoque, entregas, devoluções, vencimentos e histórico de utilização.\n" +
            "\n" +
            "Com integrações a sistemas de SST e CRMs, o GoEPI reduz processos manuais, aumenta a rastreabilidade e facilita o cumprimento das obrigações de segurança ocupacional.",
        stacks: ["Laravel", "Vite", "Postgres", "SST", "Automações"],
        accent: "cyan",
        image: goepiImage,
        link: 'https://www.goepi.com.br/',
        owner: "GoEPI - Contrato"
    },
    {
        number: "02",
        title: "Phrónesis Blog",
        subtitle: "Academia de estudos sociais",
        description: "Blog desenvolvido para reunir artigos e reflexões sobre tecnologia, economia, filosofia e temas relacionados à sociedade contemporânea. O projeto busca transformar assuntos complexos em conteúdos organizados, acessíveis e relevantes para diferentes públicos.\n" +
            "\n" +
            "A plataforma foi estruturada para facilitar a publicação e a descoberta de artigos, oferecendo uma experiência de leitura limpa, responsiva e direcionada à construção e ao compartilhamento de conhecimento.",
        stacks: ["Laravel", "Livewire", "Blog", "Acadêmico"],
        accent: "violet",
        image: phronesisImage,
        link: 'https://phronesisblog.com.br/',
        owner: "Open Source - Fundador"
    },
    {
        number: "03",
        title: "Buscalog",
        subtitle: "Gestão e Rastreamento de Frotas",
        description: "Plataforma desenvolvida para centralizar o monitoramento de veículos e dispositivos de rastreamento, oferecendo maior controle sobre frotas, trajetos, eventos e informações operacionais.\n" +
            "\n" +
            "O BuscaLog processa a comunicação simultânea de centenas de dispositivos via TCP/IP, permitindo acompanhar posições e ocorrências em uma interface centralizada. A solução também organiza históricos, relatórios e dados de telemetria, auxiliando empresas na tomada de decisões e na segurança de suas operações.",
        stacks: ["Laravel", "React", "TCP", "Microserviços"],
        accent: "cyan",
        image: buscalogImage,
        link: "https://sorotech.dev.br/produtos/buscalog",
        owner: "Buscalog - Sócio"
    },
    {
        number: "04",
        title: "Clone TabNews",
        subtitle: "Curso do Filipe Deschamps",
        description: "Aplicação desenvolvida para reproduzir a estrutura do TabNews e aprofundar conhecimentos na construção de sistemas web completos. O projeto reúne interface, persistência de dados, testes automatizados e infraestrutura em containers.\n" +
            "\n" +
            "Com Next.js, React, PostgreSQL e Docker, o Clone TabNews foi utilizado para estudar arquitetura de software, integração com banco de dados, organização de ambientes e evolução incremental de uma aplicação real.",
        stacks: ["Next.js", "React", "PostgreSQL", "Docker"],
        accent: "violet",
        image: cursoDevImage,
        link: 'https://clone-tabnews.pegoraro.dev.br/',
        owner: "cuso.dev - Estudo"
    },
    {
        number: "05",
        title: "Análise de Mercado - Rede D’Or",
        subtitle: "Análise financeira e setorial",
        description: "Aplicação institucional desenvolvida para apresentar uma análise estruturada da Rede D’Or, reunindo informações sobre a empresa, o setor de saúde, crescimento da receita, concorrência e desempenho financeiro.\n" +
            "\n" +
            "O projeto organiza dados e indicadores em uma experiência visual moderna e interativa, facilitando a compreensão da companhia e de sua tese de investimento por meio de gráficos, animações e seções analíticas. A aplicação foi construída como site estático com React, TypeScript e Vite.",
        stacks: ["Microeconomia", "Análise de Mercado", "React", "Recharts"],
        accent: "cyan",
        image: redeDorImage,
        link: 'https://rede-dor.pegoraro.dev.br/',
        owner: "Grupo Acadêmico - Estudo"
    },
];

export default projects;