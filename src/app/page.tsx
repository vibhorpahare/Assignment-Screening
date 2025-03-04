'use client'; // Marking the component as a client-side component

import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box
} from '@mui/material';

// Type for user data
interface UserData {
  username: string;
  createDate: string;
  passwordChangedDate: string;
  lastAccessDate: string;
  mfaEnabled: string;
}

// Function to calculate the number of days since a given date
const calculateDays = (date: string): number => {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const diffTime = Math.abs(currentDate.getTime() - targetDate.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // converting milliseconds to days
};

const UserInfo: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  // Simulating an API call
  useEffect(() => {
    const fetchData = async () => {
      const response: UserData[] = [
        {
          username: 'Foo Bar1',
          createDate: 'Oct 1 2020',
          passwordChangedDate: 'Oct 1 2021',
          lastAccessDate: 'Jan 4 2025',
          mfaEnabled: 'Yes',
        },
        {
          username: 'Foo1 Bar1',
          createDate: 'Sep 20 2019',
          passwordChangedDate: 'Sep 22 2019',
          lastAccessDate: 'Feb 8 2025',
          mfaEnabled: 'No',
        },
        {
          username: 'Foo2 Bar2',
          createDate: 'Feb 3 2022',
          passwordChangedDate: 'Feb 3 2022',
          lastAccessDate: 'Feb 12 2025',
          mfaEnabled: 'No',
        },
        {
          username: 'Foo3 Bar3',
          createDate: 'Mar 7 2023',
          passwordChangedDate: 'Mar 10 2023',
          lastAccessDate: 'Jan 3 2022',
          mfaEnabled: 'Yes',
        },
        {
          username: 'Foo Bar4',
          createDate: 'Apr 8 2018',
          passwordChangedDate: 'Apr 12 2020',
          lastAccessDate: 'Oct 4 2022',
          mfaEnabled: 'No',
        },
      ];

      setUserData(response);
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>User Information</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="user info table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Human User</strong></TableCell>
              <TableCell><strong>Create Date</strong></TableCell>
              <TableCell><strong>Password Changed Date</strong></TableCell>
              <TableCell><strong>Days Since Last Password Change</strong></TableCell>
              <TableCell><strong>Last Access Date</strong></TableCell>
              <TableCell><strong>Days Since Last Access</strong></TableCell>
              <TableCell><strong>MFA Enabled</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.createDate}</TableCell>
                <TableCell>{user.passwordChangedDate}</TableCell>
                <TableCell>{calculateDays(user.passwordChangedDate)}</TableCell>
                <TableCell>{user.lastAccessDate}</TableCell>
                <TableCell>{calculateDays(user.lastAccessDate)}</TableCell>
                <TableCell>{user.mfaEnabled}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserInfo;
