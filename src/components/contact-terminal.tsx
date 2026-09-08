"use client";

import { FormEvent, useState } from "react";

export function ContactTerminal() {
  const [sent,setSent]=useState(false);
  const submit=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();setSent(true)};
  if(sent)return <div className="terminal-success" data-reveal><p className="eyebrow">SYSTEM RESPONSE / 200</p><h2>Channel prepared.</h2><p>This prototype cannot transmit yet. Email Kamwanga directly through the secure link below.</p><a className="button" href="mailto:kamwangarahiim@gmail.com">Open email client ↗</a><button type="button" onClick={()=>setSent(false)}>RESET TERMINAL</button></div>;
  return <form className="terminal" onSubmit={submit} data-reveal><div className="terminal-head"><span data-glitch>SYSTEM_AUTH: VERIFIED</span><span className="signal" data-glitch>● ONLINE</span></div><div className="spectrum" aria-label="Decorative signal visualization">{Array.from({length:32},(_,i)=><i key={i} style={{animationDelay:`-${(i%9)*.07}s`}} />)}</div><div className="terminal-log"><span data-glitch>ENCRYPTION: ACTIVE</span><span>[ AES-256 ]</span><span>LOCATION: TRACEABLE</span></div><label><span>&gt; NAME:</span><input name="name" required autoComplete="name" /></label><label><span>&gt; EMAIL:</span><input type="email" name="email" required autoComplete="email" /></label><label><span>&gt; MESSAGE:</span><textarea name="message" required rows={5} /></label><button type="submit" data-magnetic>TRANSMIT_DATA <b>↗</b></button></form>;
}
