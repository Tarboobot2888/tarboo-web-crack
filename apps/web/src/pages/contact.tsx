import Layout from '../components/Layout';

const Contact = () => (
  <Layout>
    <h1 className="text-3xl font-bold mb-4">Contact</h1>
    <form action="https://formspree.io/f/moqprrvn" method="POST" className="flex flex-col gap-4 max-w-md">
      <input type="text" name="name" placeholder="Name" className="p-2 rounded bg-secondary" required />
      <input type="email" name="email" placeholder="Email" className="p-2 rounded bg-secondary" required />
      <textarea name="message" placeholder="Message" className="p-2 rounded bg-secondary" rows={5} required />
      <button type="submit" className="bg-primary text-black py-2 rounded">Send</button>
    </form>
  </Layout>
);

export default Contact;
