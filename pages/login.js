import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@/components/Account'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
    weight: ['300', '400', '600', '700', '800'],
    subsets: ['latin']
})

export default function Login() {
    
    const session = useSession()
    const supabase = useSupabaseClient()
    const router = useRouter()
    
    useEffect(() => {
        if(session){
            router.push('/ottomotos')
        }
    });
    
    return (   
    <>
        <Head>
            <title>Login | OttoMotos</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className={montserrat.className && "main-login"}>
            <div className='login-form-surround'>
                <h2>Entre na sua conta OttoMotos</h2>
                <Auth supabaseClient={supabase}     appearance={{
                        theme: ThemeSupa,
                        variables: {
                          default: {
                            colors: {
                              brand: 'rgb(255, 105, 0)',
                              brandAccent: 'rgb(235, 99, 2)'
                            },
                          },
                        },
                      }} theme="default" providers={['google', 'facebook']}
                      localization={{
                        variables: {
                                "sign_up": {
                                  "email_label": "Endereço de Email",
                                  "password_label": "Crie uma senha",
                                  "email_input_placeholder": "Seu email",
                                  "password_input_placeholder": "Sua senha",
                                  "button_label": "Criar conta",
                                  "loading_button_label": "Criando conta...",
                                  "social_provider_text": "Crie sua conta com {{provider}}",
                                  "link_text": "Não tem uma conta? Crie agora",
                                  "confirmation_text": "Confira seu email inserido pelo link de confirmação"
                                },
                                "sign_in": {
                                  "email_label": "Endereço de Email",
                                  "password_label": "Crie uma senha",
                                  "email_input_placeholder": "Seu email",
                                  "password_input_placeholder": "Sua senha",
                                  "button_label": "Entrar",
                                  "loading_button_label": "Entrando na sua conta...",
                                  "social_provider_text": "Entrar com {{provider}}",
                                  "link_text": "Já tem uma conta? Entre agora"
                                },
                                "forgotten_password": {
                                  "email_label": "Endereço de Email",
                                  "password_label": "Crie uma senha",
                                  "email_input_placeholder": "Seu email",
                                  "button_label": "Enviar informações de recuperação",
                                  "loading_button_label": "Enviando informações de recuperação...",
                                  "link_text": "Esqueceu sua senha? Recupere agora",
                                  "confirmation_text": "Confira seu email para as informações de recuperação"
                                },
                                "update_password": {
                                  "password_label": "Nova senha",
                                  "password_input_placeholder": "Sua nova senha",
                                  "button_label": "Altere sua senha",
                                  "loading_button_label": "Alterando sua senha...",
                                  "confirmation_text": "Sua senha foi alterada com sucesso."
                                }
                        }
                      }}/>
            </div>
        </main>
    </>
    )
}