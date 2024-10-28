"use client";
import React, { useState } from "react";
import { Container, Stack, Button, FormControl, Input, FormLabel, Modal, ModalDialog, DialogTitle, DialogContent, Textarea } from '@mui/joy';
import { Email } from "@mui/icons-material";
import Colors from "../colors";

interface ContactMeProps {
    theme: string;
    lang: string;
    open: boolean;
    onClose: () => void;
}

const ContactMe: React.FC<ContactMeProps> = ({ theme, lang, open, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog sx={{ backgroundColor: theme === 'dark' ? Colors.textDark : 'beige' }}>
                <DialogTitle sx={{ color: Colors.red, fontSize: '1.2rem' }}>Déjanos tu Mensaje</DialogTitle>
                <DialogContent sx={{ color: Colors.textLight }}>Te responderemos cuanto antes.</DialogContent>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={1}>
                        <FormLabel sx={{ color: Colors.textLight }}>Nombres:</FormLabel>
                        <Input
                            sx={{ color: Colors.textLight }}
                            type="text"
                            name="name"
                            placeholder="Escribe tu nombre"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormLabel sx={{ color: Colors.textLight }}>Email:</FormLabel>
                        <Input
                            sx={{ color: Colors.textLight }}
                            type="email"
                            startDecorator={<Email />}
                            name="email"
                            value={email}
                            placeholder="Escribe email de contacto"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormLabel sx={{ color: Colors.textLight }}>Mensaje:</FormLabel>
                        <Textarea
                            sx={{ color: Colors.textLight }}
                            minRows={3}
                            name="message"
                            placeholder="Escribe aquí tu mensaje..."
                            required
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button type="submit">Enviar</Button>
                    </Stack>
                </form>
            </ModalDialog>
        </Modal>
    );
};

export default ContactMe;
