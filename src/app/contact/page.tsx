import type { Metadata } from "next";
import { ContactTerminal } from "@/components/contact-terminal";
export const metadata:Metadata={title:"Contact"};
export default function Contact(){return <main id="main" className="page-shell contact-page"><header><div><span className="eyebrow">LOG_ENTRY: OPEN</span><span className="eyebrow">TERMINAL_ID: RL-01</span></div><h1 className="display">Connect</h1><p className="eyebrow">[ INIT HUMAN CHANNEL ]</p></header><section className="uplink"><div><span>UPLINK_STATUS: READY</span><span>100%</span></div><i/></section><ContactTerminal/></main>}
