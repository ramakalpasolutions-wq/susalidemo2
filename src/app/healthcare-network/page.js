import Link from 'next/link';
import { ArrowUpRight, Building2, UsersRound, GitPullRequestArrow, HeartPulse, Network, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageHero, SectionTitle, CTA, Eyebrow, Journey } from '@/components/Shared';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';

export const metadata = {
  title: 'Healthcare Network',
  description: "Learn about SUSALI's healthcare collaboration vision and how hospitals, patients and care teams can become better connected.",
};

const groups = [
  { icon: Building2, title: 'Healthcare facilities', desc: 'Clinical institutions remain responsible for delivering professional medical care.' },
  { icon: UsersRound, title: 'Coordination teams', desc: 'Support communication and facilitate practical steps across referral pathways.' },
  { icon: HeartPulse, title: 'Patients & families', desc: 'The people at the center of each healthcare journey and its next steps.' },
  { icon: GitPullRequestArrow, title: 'Referral channels', desc: 'Help relevant care information move through structured, appropriate pathways.' },
];

export default function NetworkPage() {
  return <>
    <PageHero tag="TOGETHER, CARE GOES FURTHER" title="An ecosystem of" accent="better connections." description="Exploring the power of collaboration across hospitals, support teams, referral channels and the people they serve." />

    <section className="section-space">
      <div className="container network-intro">
        <ScrollReveal direction="left">
          <div>
            <Eyebrow>OUR NETWORK VISION</Eyebrow>
            <h2>Collaboration that <span className="blue-text">moves care forward.</span></h2>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div>
            <p className="lead">No one experiences healthcare in isolation — and better coordination should reflect that.</p>
            <p>The SUSALI network concept focuses on bringing relevant healthcare stakeholders into clearer communication, supporting appropriate referrals, smoother coordination and meaningful continuity.</p>
            <p className="small-muted">Specific partner institutions and locations are not listed until formally verified and approved for publication.</p>
          </div>
        </ScrollReveal>
      </div>
      <div className="container">
        <StaggerContainer className="network-groups" stagger={0.1}>
          {groups.map(({ icon: Icon, ...g }) => (
            <StaggerItem key={g.title}>
              <TiltCard className="network-group">
                <span><Icon size={26} /></span>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <section className="network-highlight section-space">
      <div className="container network-highlight-grid">
        
        {/* FIX: Applied connect-art directly to ScrollReveal to maintain CSS Grid alignment */}
        <ScrollReveal direction="left" className="connect-art">
          <span className="connect-main">S</span>
          <span className="connect-ring r1" />
          <span className="connect-ring r2" />
          <span className="connect-bubble b1"><Building2 size={22} /></span>
          <span className="connect-bubble b2"><HeartPulse size={22} /></span>
          <span className="connect-bubble b3"><UsersRound size={22} /></span>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div>
            <Eyebrow light>CONNECTED BY PURPOSE</Eyebrow>
            <h2>Different roles.<br /><span>One shared direction.</span></h2>
            <p>From coordinating an appointment to communicating follow-up needs, connecting the right people at the right moments can make care journeys easier to navigate.</p>
            <div className="highlight-checks">
              <span><CheckCircle2 /> Shared understanding</span>
              <span><CheckCircle2 /> Clearer communication</span>
              <span><CheckCircle2 /> Patient-centered pathways</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <ScrollReveal>
      <section className="section-space">
        <div className="container">
          <SectionTitle eyebrow="JOIN THE CONVERSATION" title="Interested in" accent="collaborating?" desc="Healthcare institutions and organizations can connect with SUSALI to explore opportunities when partnership enquiries are enabled." />
          <div className="partnership-panel">
            <div>
              <h3>Let's explore what connected healthcare can make possible.</h3>
              <p>Talk to our team about your organization and potential areas for collaboration.</p>
            </div>
            <MagneticButton>
              <Link className="btn btn-primary" href="/contact">Contact SUSALI <ArrowUpRight size={18} /></Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <CTA small />
  </>;
}