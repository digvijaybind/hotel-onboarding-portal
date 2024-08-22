import AddAircraftModal from '../../components/hotel/HotelDetailsModal';
import AircraftList from '../../components/hotel/HotelList';
import MainLayout from '../../components/hotel/BookingStatus';
import UpdateAircraftModal from '../../components/hotel/UpdateAircraftModal';
import Pagin from '../../components/pagination/PageNavigator';

// Dashboard component that serves as the main container for the aircraft management
const Dashboard = () => {
  return (
    <MainLayout>
      {/* Modal component for updating existing aircraft */}
      <UpdateAircraftModal />

      {/* Component displaying the list of aircrafts */}
      <AircraftList />

      {/* Modal component for adding new aircraft */}
      <AddAircraftModal />

      {/* Pagination component for navigating through aircraft lists */}
      <Pagin />
    </MainLayout>
  );
};

export default Dashboard;
