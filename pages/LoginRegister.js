import React, { useState } from 'react';
import Center from '@/Components/Center';
import Header from '@/Components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const LoginRegister = () => {

    const router = useRouter()

    const Account = { email: 'giotocdo@gmail.com', mk: 'gio123456' };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    const handleLogin = () => {
        // Xử lý đăng nhập
        console.log('Đăng nhập', email, password);
        if (email === Account.email && password === Account.mk) {
            toast.success('Đăng nhập thành công', {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => router.push('/'),2500);
                
        }
        else {
            toast.error('Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản hoặc mật khẩu', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const handleRegister = () => {
        // Xử lý đăng ký
        console.log('Đăng ký', email, password);
    };

    const toggleMode = () => {
        setIsRegisterMode(!isRegisterMode);
    };

    return (
        <div>
            <Header />
            <Center>
                <div className="max-w-md mx-auto m-4 p-4 bg-white shadow-md rounded">
                    <h1 className="text-2xl font-bold mb-4">
                        {isRegisterMode ? 'Đăng ký' : 'Đăng nhập'}
                    </h1>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-between">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={isRegisterMode ? handleRegister : handleLogin}
                        >
                            {isRegisterMode ? 'Đăng ký' : 'Đăng nhập'}
                        </button>
                        <button
                            className="px-4 py-2 text-blue-500 underline"
                            onClick={toggleMode}
                        >
                            {isRegisterMode ? 'Đăng nhập' : 'Đăng ký'}
                        </button>
                    </div>
                </div>
            </Center>
            <ToastContainer />
        </div>
    );
};

export default LoginRegister;