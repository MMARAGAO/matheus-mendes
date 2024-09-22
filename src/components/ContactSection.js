import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MarkerPng from '../assets/marker.png';
import { Input, Select, SelectSection, SelectItem, Button, Textarea } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';


const ContactSection = () => {
    const mapContainerStyle = {
        height: "110%",
        width: "100%"
    };

    const center = {
        lat: -15.790700327752196,
        lng: -47.88015450381327
    };

    const newMarkerPosition = {
        lat: -15.790700327752196,
        lng: -47.88015450381327
    };

    const darkModeStyle = [
        { elementType: 'geometry', stylers: [{ color: '#212121' }] },
        { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
        { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#757575' }] },
        { featureType: 'administrative.country', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
        { featureType: 'administrative.land_parcel', stylers: [{ visibility: 'off' }] },
        { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#bdbdbd' }] },
        { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
        { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#181818' }] },
        { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
        { featureType: 'poi.park', elementType: 'labels.text.stroke', stylers: [{ color: '#1b1b1b' }] },
        { featureType: 'road', elementType: 'geometry.fill', stylers: [{ color: '#2c2c2c' }] },
        { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#8a8a8a' }] },
        { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#373737' }] },
        { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#3c3c3c' }] },
        { featureType: 'road.highway.controlled_access', elementType: 'geometry', stylers: [{ color: '#4e4e4e' }] },
        { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
        { featureType: 'transit', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
        { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
        { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#3d3d3d' }] }
    ];

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        servico: '',
        orcamento: '',
        text: ''
    });

    useEffect(() => {
        console.log("Dados do formulário:", formData);
    }, [formData]);


    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página

        setIsLoading(true);

        const serviceID = 'service_421wtpy';
        const templateID = 'template_kxuc4q9';
        const userID = 'vJnr_xdr_58I-OquK';

        const templateParams = {
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            servico: formData.servico,
            orcamento: formData.orcamento,
            text: formData.text
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('E-mail enviado com sucesso!', response.status, response.text);
                setIsSubmitted(true);
            }, (error) => {
                console.error('Erro ao enviar o e-mail:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };




    return (
        <div>
            <div className="w-full lg:h-[30rem] h-[20rem] relative  ">
                <div className="lg:w-1/2  absolute z-20 lg:top-0 bottom-0 lg:right-0 flex justify-end lg:justify-center lg:items-center flex-col lg:space-y-10 px-2 lg:px-0 py-2 lg:py-0">
                    <div className="flex lg:space-x-10 2xl:space-x-12 space-x-5 lg:text-5xl 2xl:text-7xl text-gray-300 font-bold w-full text-left"><h1>V</h1><h1>A</h1><h1>M</h1><h1>O</h1><h1>S</h1></div>
                    <div className="flex lg:space-x-10 2xl:space-x-12 space-x-5 lg:text-5xl 2xl:text-7xl text-gray-300 font-bold w-full text-left"><h1>T</h1><h1>R</h1><h1>A</h1><h1>B</h1><h1>A</h1><h1>L</h1><h1 className="lg:text-gray-700">H</h1><h1 className="lg:text-gray-700">A</h1><h1 className="lg:text-gray-700">R</h1></div>
                    <div className="flex lg:space-x-10 2xl:space-x-12 space-x-5 lg:text-5xl 2xl:text-7xl text-gray-300 font-bold w-full text-left"><h1>J</h1><h1>U</h1><h1>N</h1><h1>T</h1><h1>O</h1><h1>S</h1></div>
                </div>
                <div className="lg:w-[80%] w-full h-full overflow-hidden">
                    <LoadScript googleMapsApiKey="AIzaSyAz5T0fQiAlVrcIk-wnNTxxSISP75_-iBw">
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={14}
                            options={{
                                gestureHandling: 'greedy',
                                styles: darkModeStyle,
                                zoomControl: false,
                                fullscreenControl: false,
                                mapTypeControl: false,
                                streetViewControl: false,
                                minZoom: 14,
                                maxZoom: 100
                            }}
                        >
                            <Marker position={newMarkerPosition} icon={MarkerPng} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5  px-5 py-10 lg:py-20 lg:px-40">
                <section className=" space-y-3 ">
                    <h1 className="text-gray-400 text-sm tracking-[4px]">Contato</h1>
                    <p className="font-semibold text-2xl">Entre em contato — vamos<br /> trabalhar juntos.</p>

                    <h2 className="text-gray-400 text-sm tracking-[4px]">Endereço</h2>
                    <div className="">
                        <p className="text-[15px]">Matheus Mendes</p>
                        <p className="text-[15px]">SBN qd. 1, bl. C</p>
                        <p className="text-[15px]">Asa Norte, Brasília - DF</p>
                        <p className="text-[15px]">Brasil</p>
                    </div>
                </section>
                <form className=" space-y-4" onSubmit={handleSubmit}>
                    <p className="text-gray-400">Tem um projeto? Envie uma mensagem se quiser trabalhar juntos em algo empolgante. Grande ou pequeno. Mobile ou web.</p>
                    <div className="grid grid-cols-2 gap-5">
                        <Input type="email" variant="underlined" label="Seu Email" name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        <Input type="text" variant="underlined" label="Seu Nome" name="nome" onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
                        <InputMask
                            mask="(99) 9 9999-9999"
                            value={formData.telefone}
                            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        >
                            {(inputProps) => <Input {...inputProps} type="text" variant="underlined" label="Telefone" name="telefone" />}
                        </InputMask>
                        <Select variant="underlined" label="Serviço" name="servico">
                            <SelectSection>
                                <SelectItem onClick={() => setFormData({ ...formData, servico: 'Precisa de ajuda com um projeto único' })}>Precisa de ajuda com um projeto único</SelectItem>
                                <SelectItem onClick={() => setFormData({ ...formData, servico: 'Procurando uma parceria de longo prazo' })}>Procurando uma parceria de longo prazo</SelectItem>
                                <SelectItem onClick={() => setFormData({ ...formData, servico: 'Quer me contratar em tempo integral' })}>Quer me contratar em tempo integral</SelectItem>
                                <SelectItem onClick={() => setFormData({ ...formData, servico: 'Só queria dizer oi!' })}>Só queria dizer oi!</SelectItem>
                            </SelectSection>
                        </Select>

                        <Select variant="underlined" label="Orçamento" name="orcamento">
                            <SelectSection>
                                <SelectItem onClick={() => setFormData({ ...formData, orcamento: 'Conforme a complexidade e o tamanho do projeto' })}><h1 className="font-semibold">Conforme a complexidade e o tamanho do projeto</h1></SelectItem>
                                <SelectItem onClick={() => setFormData({ ...formData, orcamento: 'R$ 3.000 - R$ 4.000' })}>R$ 3.000 - R$ 4.000</SelectItem>
                                <SelectItem onClick={() => setFormData({ ...formData, orcamento: 'R$ 4.000 - R$ 5.000' })}>R$ 4.000 - R$ 5.000</SelectItem>
                                <SelectItem onClick={() => setFormData({ ...formData, orcamento: 'R$ 5.000 - R$ 6.000' })}>R$ 5.000 - R$ 6.000</SelectItem>
                                <SelectItem onClick={() => setFormData({ ...formData, orcamento: 'R$ 6.000 - R$ 7.000' })}>R$ 6.000 - R$ 7.000</SelectItem>
                                <SelectItem onClick={() => setFormData({ ...formData, orcamento: 'R$ 7.000 - R$ 8.000' })}>R$ 7.000 - R$ 8.000</SelectItem>

                            </SelectSection>
                        </Select>

                    </div>
                    <Textarea
                        variant={"underlined"}
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        className="w-full"
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    />
                    <Button
                        type="submit"
                        color="default"
                        variant="ghost"
                        isLoading={isLoading}
                        startContent={
                            !isSubmitted && !isLoading ? <FontAwesomeIcon icon={faEnvelope} /> : null
                        }
                        disabled={isSubmitted}
                    >
                        {isSubmitted ? 'Enviado com sucesso' : 'Enviar'}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ContactSection;