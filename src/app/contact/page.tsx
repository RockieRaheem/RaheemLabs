import type { Metadata } from "next";
import { ContactTerminal } from "@/components/contact-terminal";
export const metadata:Metadata={title:"Contact"};
export default function Contact(){return <main id="main" className="page-shell contact-page"><header><div><span className="eyebrow">LOG_ENTRY: OPEN</span><span className="eyebrow">TERMINAL_ID: RL-01</span></div><h1 className="display" data-glitch>Connect</h1><p className="eyebrow">[ INIT SECURE CHANNEL ]</p></header><section className="uplink"><div><span data-glitch>UPLINK_STATUS: SYNCHRONIZED</span><span>100%</span></div><i/><small>[ BIT_RATE: 1.2 GB/S ] &nbsp; SPECTRAL_AUDIO</small></section><ContactTerminal/></main>}
