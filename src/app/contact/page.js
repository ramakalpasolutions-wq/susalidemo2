import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle, Clock3 } from 'lucide-react';
import { PageHero, Eyebrow } from '@/components/Shared';
import ContactForm from '@/components/ContactForm';
import { site } from '@/data/site';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Contact SUSALI',
  description: "Contact SUSALI — Let's Connect for Better Healthcare",
};

export default function Contact() {
  return <>
    <PageHero tag="LET'S STAY CONNECTED" title="A Conversation Can Be the Beginning of" accent="Better Connections." description="Have a question about SUSALI or want to learn more about our healthcare services? We welcome your enquiry." />

    <section className="section-space">
      <div className="container contact-layout">
        <div>
          <ScrollReveal direction="left">
            <div className="contact-aside">
              <Eyebrow>HOW CAN WE HELP?</Eyebrow>
              <h2>Meaningful Connections Start with a<br /><span className="blue-text">Conversation.</span></h2>
              <p>At SUSALI, we believe that communication is at the heart of connected healthcare. Whether you're looking for general information, patient registration guidance, hospital coordination details or potential collaboration opportunities, you can reach us through our official contact channels.</p>
              <div className="contact-methods">
                {site.email && <a href={'mailto:' + site.email}><span><Mail size={22} /></span><div><small>EMAIL US</small><strong>{site.email}</strong></div><ArrowUpRight size={18} /></a>}
                {site.phone && <a href={'tel:' + site.phone}><span><Phone size={22} /></span><div><small>CALL US</small><strong>{site.phone}</strong></div><ArrowUpRight size={18} /></a>}
                {site.address && <div className="contact-method-static"><span><MapPin size={22} /></span><div><small>VISIT US</small><strong>{site.address}</strong></div></div>}
                {!site.email && !site.phone && !site.address && <div className="contact-pending"><Mail size={24} /><strong>Official contact details coming soon</strong><p>SUSALI's verified email, phone number and address can be added in <code>src/data/site.js</code> before the website goes live.</p></div>}
              </div>
              <div className="contact-small-note">For medical emergencies, contact local emergency services or the nearest emergency department. This website does not provide urgent medical assistance.</div>
            </div>
          </ScrollReveal>
        </div>
        
        <div>
          <ScrollReveal direction="right">
            <div className="contact-form-shell">
              <div className="contact-form-heading"><span>SEND US AN ENQUIRY</span><h3>Tell Us How We Can Help.</h3><p>We'd be happy to learn more about your question or enquiry.</p></div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </>;
}