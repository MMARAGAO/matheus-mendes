import { useLocation } from 'react-router-dom';
import projectData from '../Project.json';

const SectionProject = () => {
    const location = useLocation();
    const { id } = location.state || {};

    if (!id) {
        return <div>ID do projeto não fornecido</div>;
    }

    const project = projectData.projetos.find(projeto => projeto.id === id);

    if (!project) {
        return <div>Projeto não encontrado</div>;
    }

    return (
        <div className='space-y-8 px-2'>
            <div className="grid grid-cols-1 2xl:gap-40 gap-10 md:grid-cols-2 lg:px-20 2xl:px-60">
                <div className=" space-y-4">
                    <h1 className="text-gray-400 text-[14px]">{project.formato}</h1>
                    <h1 className="text-4xl font-bold ">{project.titulo}</h1>
                    <div>
                        <h2 className="text-gray-400 text-[14px]">Minha Função</h2>
                        <ul className="font-semibold">
                            {project.minhaFuncao.map((funcao, index) => (
                                <li className="text-gray-600 mb-2" key={index}>{funcao}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-gray-400 text-[14px]">Cliente </p>
                        <p className='font-semibold'>{project.cliente}</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[14px]">Ano</p>
                        <p className='font-semibold'>{project.ano}</p>
                    </div>
                </div>
                <div className='space-y-4'>
                    <p className="text-gray-500 text-lg">{project.descricao}</p>
                    <p className="text-gray-500 text-lg"> {project.meta}</p>
                    <p className="text-gray-500 text-lg">{project.processoCriativo}</p>
                    <p className="text-gray-500 text-md flex space-x-1"><h1>Agência:</h1> <h1 className='font-semibold text-black'>{project.agencia}</h1></p>
                </div>

            </div>
            <div className='w-full justify-center items-center flex flex-col lg:px-80 2xl:px-96 text-center space-y-4 lg:py-20 py-10'>
                <h2 className="text-gray-500 text-sm tracking-[4px]">Depoimento do Cliente</h2>
                <blockquote className="lg:text-3xl text-xl">
                    <p className="font-bold">"{project.depoimentoDoCliente.texto}"</p>
                </blockquote>
                <footer className="text-sm">
                    <h1 className='font-semibold text-sm'> {project.depoimentoDoCliente.nome}  —</h1>  <h1 className='text-gray-500 text-sm'> {project.depoimentoDoCliente.cargo}</h1>
                </footer>
            </div>
        </div >
    );
};

export default SectionProject;