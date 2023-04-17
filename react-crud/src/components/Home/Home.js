import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import {Table, Input, Button,Modal,message} from 'antd'
import { EditOutlined, DeleteOutlined} from "@ant-design/icons";
import { SearchOutlined } from '@ant-design/icons'
import config from "../../config.json"

const Home = () =>{

  let SERVER_URL = config.SERVER_URL

  const [isEditing, setIsEditing] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [contact, setContact] = useState({
      data: []
    })

    useEffect(()=>{
      getData()
    },[])

 
  const getData = async()=>{
    await axios.get(SERVER_URL+'/contacts/getAllContact')
    .then((res)=>{
      console.log("res", res)
      setContact({data : res.data.result})
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const editcontacts = (contact_id) =>{
    setIsEditing(true)
    setEditingContact({...contact_id})
  }

  const resetEditing = () =>{
    setIsEditing(false)
    setEditingContact(null)
    }

    //Delete Contacts
  const deleteContacts = (data)=>{
    console.log("dataaa", data)
    axios.delete(SERVER_URL+'/contacts/deleteContact', {params : {contact_id : data.contact_id}})
    .then((res)=>{
      console.log("updated result==>", res)
      if(res){
        setTimeout(() => {
          message.success("Item Deleted Successfully")
         }, 1000);
      
        axios.get(SERVER_URL+'/contacts/getAllContact')
        .then((res)=>{
        console.log("res", res)
        setContact({data : res.data.result})
        })
        .catch((err)=>{
        console.log(err)
        })
      }
    })
    .catch((err)=>{
      console.log("err", err)
    })
  }

  //Update Contacts
  const updatecontacts = ()=>{
    console.log("editingContact==>", editingContact)
    axios.put(SERVER_URL+'/contacts/updateContacts', editingContact)
    .then((res)=>{
      console.log("updated result==>", res)
      if(res){
        axios.get(SERVER_URL+'/contacts/getAllContact')
        .then((res)=>{
        console.log("res", res)
        setContact({data : res.data.result})
        })
        .catch((err)=>{
        console.log(err)
        })
      }
    })
    .catch((err)=>{
      console.log("err", err)
    })
  }


    const data = contact.data;
    const columns = [
      
        // {
        //     title: 'Id',
        //     dataIndex: 'contact_id',
        //     key: 'contact_id',
        //     width: 100,
        //     sorter: {
        //         compare: (a, b) => a.contact_id - b.contact_id,
        //         multiple: 3,
        //       },
        //       filterDropdown: ({
        //         setSelectedKeys,
        //         selectedKeys,
        //         confirm,
        //         clearFilters,
        //       }) => {
        //         return (
        //           <>
        //             <Input
        //               autoFocus
        //               placeholder="Type text here"
        //               value={selectedKeys[0]}
        //               onChange={(e) => {
        //                 setSelectedKeys(e.target.value ? [e.target.value] : []);
        //                 confirm({ closeDropdown: false });
        //               }}
        //               onPressEnter={() => {
        //                 confirm();
        //               }}
        //               onBlur={() => {
        //                 confirm();
        //               }}
        //             ></Input>
                    
        //           </>
        //         );
        //       },
        //       filterIcon: () => {
        //         return <SearchOutlined />;
        //       },
        //       onFilter: (value, record) => {
        //         return record.contact_id == value;
        //       },
        // },
        {
            title: 'First Name',
            dataIndex: 'FirstName',
            key: 'FirstName',
            width: 100,
            sorter: {
                compare: (a, b) => a.FirstName.localeCompare(b.FirstName)
                
              },
              filterDropdown: ({
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
              }) => {
                return (
                  <>
                    <Input
                      autoFocus
                      placeholder="Type text here"
                      value={selectedKeys[0]}
                      onChange={(e) => {
                        setSelectedKeys(e.target.value ? [e.target.value] : []);
                        confirm({ closeDropdown: false });
                      }}
                      onPressEnter={() => {
                        confirm();
                      }}
                      onBlur={() => {
                        confirm();
                      }}
                    ></Input>
                    <Button
                      onClick={() => {
                        confirm();
                      }}
                      type="primary"
                    >
                      Search
                    </Button>
                    <Button
                      onClick={() => {
                        clearFilters();
                      }}
                      type="danger"
                    >
                      Reset
                    </Button>
                  </>
                );
              },
              filterIcon: () => {
                return <SearchOutlined />;
              },
              onFilter: (value, record) => {
                return record.FirstName.toLowerCase().includes(value.toLowerCase());
              },
        },

        {
            title: 'Last Name',
            dataIndex: 'LastName',
            key: 'LastName',
            width: 100,
            sorter: {
                compare: (a, b) => a.LastName.localeCompare(b.LastName)
                
              },
              filterDropdown: ({
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
              }) => {
                return (
                  <>
                    <Input
                      autoFocus
                      placeholder="Type text here"
                      value={selectedKeys[0]}
                      onChange={(e) => {
                        setSelectedKeys(e.target.value ? [e.target.value] : []);
                        confirm({ closeDropdown: false });
                      }}
                      onPressEnter={() => {
                        confirm();
                      }}
                      onBlur={() => {
                        confirm();
                      }}
                    ></Input>
                    <Button
                      onClick={() => {
                        confirm();
                      }}
                      type="primary"
                    >
                      Search
                    </Button>
                    <Button
                      onClick={() => {
                        clearFilters();
                      }}
                      type="danger"
                    >
                      Reset
                    </Button>
                  </>
                );
              },
              filterIcon: () => {
                return <SearchOutlined />;
              },
              onFilter: (value, record) => {
                return record.LastName.toLowerCase().includes(value.toLowerCase());
              },
        },

        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 100,
            sorter: {
                compare: (a, b) => a.email.localeCompare(b.email)
                
              },
              filterDropdown: ({
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
              }) => {
                return (
                  <>
                    <Input
                      autoFocus
                      placeholder="Type text here"
                      value={selectedKeys[0]}
                      onChange={(e) => {
                        setSelectedKeys(e.target.value ? [e.target.value] : []);
                        confirm({ closeDropdown: false });
                      }}
                      onPressEnter={() => {
                        confirm();
                      }}
                      onBlur={() => {
                        confirm();
                      }}
                    ></Input>
                    <Button
                      onClick={() => {
                        confirm();
                      }}
                      type="primary"
                    >
                      Search
                    </Button>
                    <Button
                      onClick={() => {
                        clearFilters();
                      }}
                      type="danger"
                    >
                      Reset
                    </Button>
                  </>
                );
              },
              filterIcon: () => {
                return <SearchOutlined />;
              },
              onFilter: (value, record) => {
                return record.email.toLowerCase().includes(value.toLowerCase());
              },
        },

        //phonenumber
        {
            title: 'Phone Number',
            dataIndex: 'PhoneNumber',
            key: 'PhoneNumber',
            width: 100,
              filterDropdown: ({
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters,
              }) => {
                return (
                  <>
                    <Input
                      autoFocus
                      placeholder="Type text here"
                      value={selectedKeys[0]}
                      onChange={(e) => {
                        setSelectedKeys(e.target.value ? [e.target.value] : []);
                        confirm({ closeDropdown: false });
                      }}
                      onPressEnter={() => {
                        confirm();
                      }}
                      onBlur={() => {
                        confirm();
                      }}
                    ></Input>
                    <Button
                      onClick={() => {
                        confirm();
                      }}
                      type="primary"
                    >
                      Search
                    </Button>
                    <Button
                      onClick={() => {
                        clearFilters();
                      }}
                      type="danger"
                    >
                      Reset
                    </Button>
                  </>
                );
              },
              filterIcon: () => {
                return <SearchOutlined />;
              },
              onFilter: (value, record) => {
                return record.PhoneNumber.toLowerCase().includes(value.toLowerCase());
              },
        },

        //address

        {
            title : "Address",
            children : [

                //city
                {
                    title: 'City',
                    dataIndex: 'City',
                    key: 'city',
                    width: 100,
                    sorter: {
                        compare: (a, b) => a.City.localeCompare(b.City)
                        
                      },
                      filterDropdown: ({
                        setSelectedKeys,
                        selectedKeys,
                        confirm,
                        clearFilters,
                      }) => {
                        return (
                          <>
                            <Input
                              autoFocus
                              placeholder="Type text here"
                              value={selectedKeys[0]}
                              onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm({ closeDropdown: false });
                              }}
                              onPressEnter={() => {
                                confirm();
                              }}
                              onBlur={() => {
                                confirm();
                              }}
                            ></Input>
                            <Button
                              onClick={() => {
                                confirm();
                              }}
                              type="primary"
                            >
                              Search
                            </Button>
                            <Button
                              onClick={() => {
                                clearFilters();
                              }}
                              type="danger"
                            >
                              Reset
                            </Button>
                          </>
                        );
                      },
                      filterIcon: () => {
                        return <SearchOutlined />;
                      },
                      onFilter: (value, record) => {
                        return record.City.toLowerCase().includes(value.toLowerCase());
                      },
                },
        
                //State
                {
                    title: 'State',
                    dataIndex: 'State',
                    key: 'State',
                    width: 100,
                    sorter: {
                        compare: (a, b) => a.State.localeCompare(b.State)
                        
                      },
                      filterDropdown: ({
                        setSelectedKeys,
                        selectedKeys,
                        confirm,
                        clearFilters,
                      }) => {
                        return (
                          <>
                            <Input
                              autoFocus
                              placeholder="Type text here"
                              value={selectedKeys[0]}
                              onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm({ closeDropdown: false });
                              }}
                              onPressEnter={() => {
                                confirm();
                              }}
                              onBlur={() => {
                                confirm();
                              }}
                            ></Input>
                            <Button
                              onClick={() => {
                                confirm();
                              }}
                              type="primary"
                            >
                              Search
                            </Button>
                            <Button
                              onClick={() => {
                                clearFilters();
                              }}
                              type="danger"
                            >
                              Reset
                            </Button>
                          </>
                        );
                      },
                      filterIcon: () => {
                        return <SearchOutlined />;
                      },
                      onFilter: (value, record) => {
                        return record.State.toLowerCase().includes(value.toLowerCase());
                      },
                },
        
                //Country
                {
                    title: 'Country',
                    dataIndex: 'Country',
                    key: 'Country',
                    width: 100,
                    sorter: {
                        compare: (a, b) => a.Country.localeCompare(b.Country)
                        
                      },
                      filterDropdown: ({
                        setSelectedKeys,
                        selectedKeys,
                        confirm,
                        clearFilters,
                      }) => {
                        return (
                          <>
                            <Input
                              autoFocus
                              placeholder="Type text here"
                              value={selectedKeys[0]}
                              onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm({ closeDropdown: false });
                              }}
                              onPressEnter={() => {
                                confirm();
                              }}
                              onBlur={() => {
                                confirm();
                              }}
                            ></Input>
                            <Button
                              onClick={() => {
                                confirm();
                              }}
                              type="primary"
                            >
                              Search
                            </Button>
                            <Button
                              onClick={() => {
                                clearFilters();
                              }}
                              type="danger"
                            >
                              Reset
                            </Button>
                          </>
                        );
                      },
                      filterIcon: () => {
                        return <SearchOutlined />;
                      },
                      onFilter: (value, record) => {
                        return record.Country.toLowerCase().includes(value.toLowerCase());
                      },
                },
        
                //Postal code
                {
                    title: 'Postal Code',
                    dataIndex: 'PostalCode',
                    key: 'PostalCode',
                    width: 100,
                    sorter: {
                        compare: (a, b) => a.PostalCode.localeCompare(b.PostalCode)
                        
                      },
                      filterDropdown: ({
                        setSelectedKeys,
                        selectedKeys,
                        confirm,
                        clearFilters,
                      }) => {
                        return (
                          <>
                            <Input
                              autoFocus
                              placeholder="Type text here"
                              value={selectedKeys[0]}
                              onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm({ closeDropdown: false });
                              }}
                              onPressEnter={() => {
                                confirm();
                              }}
                              onBlur={() => {
                                confirm();
                              }}
                            ></Input>
                            <Button
                              onClick={() => {
                                confirm();
                              }}
                              type="primary"
                            >
                              Search
                            </Button>
                            <Button
                              onClick={() => {
                                clearFilters();
                              }}
                              type="danger"
                            >
                              Reset
                            </Button>
                          </>
                        );
                      },
                      filterIcon: () => {
                        return <SearchOutlined />;
                      },
                      onFilter: (value, record) => {
                        return record.PostalCode.toLowerCase().includes(value.toLowerCase());
                      },
                },

            ]
        },
        
        {
            title: 'Actions',
            width: 100,
            render: (contact_id) =>{
                return <>
                <EditOutlined onClick = {()=> {
                  editcontacts(contact_id)
                }} />
                <DeleteOutlined onClick = {() => deleteContacts(contact_id)}  style ={{ color: "red", marginLeft: 12}}/>
                </>
            }
        },
    ]
   
    return(
        <div>
            <Table scroll={{ x: true }} columns={columns} dataSource={data} pagination={{
            defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']
            }
          } />

        <Modal
          title= "Edit items"
          open = {isEditing}
          okText="save"
          onCancel ={()=>{
            resetEditing()
          }}
          onOk={ ()=>{ {updatecontacts()}
            resetEditing()
          }}
          >
            
          <div>
            <label>First Name</label>
            <Input type = "text" name="FirstName" value={editingContact?.FirstName} 
                onChange = {(e)=>{setEditingContact((pre)=> {
                  return { ...pre, FirstName:e.target.value};
                })}}/>
            </div> 

            <div>
            <label>Last Name</label>
            <Input type = "text" name="LastName" value={editingContact?.LastName} 
                onChange = {(e)=>{setEditingContact((pre)=> {
                  return { ...pre, LastName:e.target.value};
                })}}/>
            </div> 

            <div>
            <label>Email</label>
            <Input type = "text" name="email" value={editingContact?.email} 
                onChange = {(e)=>{setEditingContact((pre)=> {
                  return { ...pre, email:e.target.value};
                })}}/>
            </div> 

            <div>
            <label>Phone Number</label>
            <Input type = "text" name="PhoneNumber" value={editingContact?.PhoneNumber} 
                onChange = {(e)=>{setEditingContact((pre)=> {
                  return { ...pre, PhoneNumber:e.target.value};
                })}}/>
            </div> 

            <div>
            <label>City</label>
            <Input type = "text" name="City" value={editingContact?.City} 
                onChange = {(e)=>{setEditingContact((pre)=> {
                  return { ...pre, City:e.target.value};
                })}}/>
            </div> 

            <div>
            <label>State</label>
            <Input type = "text" name="State" value={editingContact?.State} 
                onChange = {(e)=>{setEditingContact((pre)=> {
                  return { ...pre, State:e.target.value};
                })}}/>
            </div> 

            <div>
            <label>Country</label>
            <Input type = "text" name="Country" value={editingContact?.Country} 
                onChange = {(e)=>{setEditingContact((pre)=> {
                  return { ...pre, Country:e.target.value};
                })}}/>
            </div> 

            <div>
            <label>Postal Code</label>
            <Input type = "text" name="PostalCode" value={editingContact?.PostalCode} 
                onChange = {(e)=>{setEditingContact((pre)=> {
                  return { ...pre, PostalCode:e.target.value};
                })}}/>
            </div> 

            <div>
        </div>
        </Modal>
        </div>
    )
}

export default Home