import { useState } from 'react';

import './App.css';
function App() {
    const [password, setPassword] = useState<string>('');
    const [passwordTwo, setPasswordTwo] = useState<string>('');

    const styles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column', // Should use specific string values like 'column' or 'row'
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#ffd700',
        fontFamily: "'Courier New', Courier, monospace",
        textAlign: 'center',
        padding: '20px',
    };

    const inputStyle: React.CSSProperties = {
        padding: '10px',
        fontSize: '16px',
        border: '2px solid #ffd700',
        borderRadius: '5px',
        backgroundColor: '#333',
        color: '#ffd700',
        outline: 'none',
        textAlign: 'center',
    };

    return (
        <div style={styles}>
            <h1>Black market</h1>
            <div>
                <h2>Are you a human?</h2>
                <h3>Solve this CAPTCHA</h3>
                <p>I’m not sure I can ___ fast enough.</p>
                <input
                    type="text"
                    placeholder="Type your answer"
                    onChange={(input) => setPassword(input.target.value)}
                    style={inputStyle}
                />
            </div>
            {password.toLowerCase().includes('run') && (
                <div>
                    <h2>We still don't believe you</h2>
                    <ol>
                        <li>Move 5 left</li>
                        <li>Move 4 right</li>
                        <li>Move 2 right</li>
                        <li>Move 3 left</li>
                    </ol>
                    <input
                        type="number"
                        placeholder="Type your answer"
                        onChange={(input) => setPasswordTwo(input.target.value)}
                        style={inputStyle}
                    />
                </div>
            )}
            {passwordTwo.toLowerCase().includes('4397') && (
                <div>
                    <p>The number is: 87579</p>
                </div>
            )}
        </div>
    );
}

export default App;