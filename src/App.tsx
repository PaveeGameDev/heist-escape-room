import { useState } from 'react';

import './App.css';
function App() {
    const [password, setPassword] = useState<string>('');

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

    const sectionStyle: React.CSSProperties = {
        marginTop: '20px',
        padding: '20px',
        border: '2px solid #ffd700',
        borderRadius: '10px',
        backgroundColor: '#111',
        boxShadow: '0 4px 10px rgba(255, 215, 0, 0.3)',
    };

    return (
        <div style={styles}>
            <h1>Heist Super Secret Website</h1>
            <div>
                <h2>Are you a human?</h2>
                <h3>Solve this CAPTCHA</h3>
                <p>What's the color of THE man's clothes?</p>
                <input
                    type="text"
                    placeholder="Type your answer"
                    onChange={(input) => setPassword(input.target.value)}
                    style={inputStyle}
                />
            </div>
            {password.toLowerCase().includes('blue') && (
                <div style={sectionStyle}>
                    <h2>Prologue for Next Week</h2>
                    <audio controls>
                        <source src="monolog.mp3" type="audio/mp3" />
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            )}
        </div>
    );
}

export default App;