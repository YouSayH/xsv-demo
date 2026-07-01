import UserList from '@/components/UserList';
import UserDetail from '@/components/UserDetail';
import CreateUserForm from '@/components/CreateUserForm';

export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>
        Cross-Stack Visualization Test Sandbox
      </h1>
      
      <UserList />
      <UserDetail />
      <CreateUserForm />
    </main>
  );
}
