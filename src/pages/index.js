import withAuth from '../components/withAuth';
import TasksProvider from '../context/taskContext';
import Layout from '../components/Layout';
import TasksList from '../containers/TasksList';
import TaskFormContainer from '../containers/TaskFormContainer';

const Home = () => {
  return (
    <TasksProvider>
      <Layout showNavbar={true}>
        <div className='flex flex-col-reverse gap-5 lg:grid grid-cols-3'>
          <TasksList />
          <TaskFormContainer />
        </div>
      </Layout>
    </TasksProvider>
  )
}

export default withAuth(Home);